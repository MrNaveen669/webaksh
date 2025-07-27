import { model } from "mongoose";
import { blogSchema } from "./schemas";
import type { Blog } from "@shared/schema";

export const BlogModel = model<Blog>("Blog", blogSchema);

export default BlogModel;