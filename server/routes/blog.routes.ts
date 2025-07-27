// server/routes/blog.routes.ts
import express from "express";
import { z } from "zod";
import { ObjectId } from 'mongodb';
import { storage } from "../storage";

const router = express.Router();

const blogSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string().optional(),
});

router.get("/", async (req, res) => {
  try {
    const blogs = await storage.getAllBlogs();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch blogs." });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = blogSchema.parse(req.body);
    const blog = await storage.createBlog(data);
    res.status(201).json(blog);
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(400).json({ success: false, errors: err.errors });
    } else {
      res.status(500).json({ success: false, message: "Failed to create blog." });
    }
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format." });
    }
    
    const deleted = await storage.deleteBlog(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Blog not found." });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete blog." });
  }
});

export default router;