import { MongoClient, Db, Collection, Document, WithId, OptionalId, Document as MongoDocument } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// MongoDB connection configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://naveenfd101:T3XECENndRMIpJa4@cluster0.6ffhs.mongodb.net/';
const DATABASE_NAME = process.env.DATABASE_NAME || 'webaksh';

// Global MongoDB client
let client: MongoClient;
let db: Db;

// Collection names
export const COLLECTIONS = {
  USERS: 'users',
  CONTACT_SUBMISSIONS: 'contact_submissions',
  BLOGS: 'blogs',
} as const;

// Base document interface
export interface BaseDocument {
  _id?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Collection document interfaces
export interface UserDocument extends BaseDocument {
  username: string;
  email: string;
  password?: string;
}

export interface ContactSubmissionDocument extends BaseDocument {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export interface BlogDocument extends BaseDocument {
  title: string;
  content: string;
  image?: string;
  author?: string;
  published?: boolean;
  tags?: string[];
}

// Database service class
export class DatabaseService {
  static async create<T extends BaseDocument>(
    collectionName: string,
    data: Omit<T, '_id' | 'createdAt' | 'updatedAt'>
  ): Promise<T> {
    const collection = await getCollection<T>(collectionName);
    const now = new Date();
    const insertDoc = {
      ...data,
      createdAt: now,
      updatedAt: now,
    };
    
    const result = await collection.insertOne(insertDoc as any);
    return { 
      ...insertDoc, 
      _id: result.insertedId.toString()
    } as T;
  }

  static async findAll<T extends BaseDocument>(
    collectionName: string,
    query = {},
    options = {}
  ): Promise<T[]> {
    const collection = await getCollection<T>(collectionName);
    const documents = await collection.find(query as any, options).toArray();
    return documents.map(doc => ({
      ...doc,
      _id: doc._id?.toString() ?? ''
    })) as T[];
  }

  static async findOne<T extends BaseDocument>(
    collectionName: string,
    query = {}
  ): Promise<T | null> {
    const collection = await getCollection<T>(collectionName);
    const document = await collection.findOne(query as any);
    if (!document || !document._id) return null;
    return {
      ...document,
      _id: document._id.toString()
    } as T;
  }

  static async updateOne<T extends BaseDocument>(
    collectionName: string,
    query = {},
    update: Partial<T>
  ): Promise<T | null> {
    const collection = await getCollection<T>(collectionName);
    const updated = await collection.findOneAndUpdate(
      query as any,
      { $set: { ...update, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );
    
    if (!updated) return null;
    
    return {
      ...updated,
      _id: updated._id.toString()
    } as T;
  }

  static async deleteOne(
    collectionName: string,
    query = {}
  ): Promise<boolean> {
    const collection = await getCollection(collectionName);
    const result = await collection.deleteOne(query);
    return result.deletedCount === 1;
  }
}

// Helper functions
export async function connectToDatabase(): Promise<void> {
  try {
    // Connect using Mongoose
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connection successful');

    // Also connect using MongoClient for direct operations
    if (!client) {
      client = new MongoClient(MONGODB_URI);
      await client.connect();
      db = client.db(DATABASE_NAME);
    }
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
}

export async function getCollection<T extends Document>(
  collectionName: string
): Promise<Collection<T>> {
  if (!db) {
    await connectToDatabase();
  }
  return db.collection<T>(collectionName);
}

export async function closeConnection(): Promise<void> {
  try {
    await mongoose.disconnect();
    if (client) {
      await client.close();
    }
    console.log('Database connections closed');
  } catch (error) {
    console.error('Error closing database connections:', error);
  }
}

// Initialize connection
connectToDatabase().catch(console.error);

export { client, db };
export default DatabaseService;