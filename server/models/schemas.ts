import { Schema, model } from 'mongoose';
import type { User, ContactSubmission, Blog } from '../../shared/schema';

const baseSchema = {
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
};

const UserSchema = new Schema<User>({
  ...baseSchema,
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: String
});

const ContactSubmissionSchema = new Schema<ContactSubmission>({
  ...baseSchema,
  firstName: { type: String, required: true },


  lastName: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  service: { type: String, required: true },
  message: { type: String, required: true }
});

const BlogSchema = new Schema<Blog>({
  ...baseSchema,
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: String,
  author: String,
  published: { type: Boolean, default: false },
  tags: [String]
});

// Create models
export const UserModel = model<User>('User', UserSchema);
export const ContactSubmissionModel = model<ContactSubmission>('ContactSubmission', ContactSubmissionSchema);
export const BlogModel = model<Blog>('Blog', BlogSchema);
