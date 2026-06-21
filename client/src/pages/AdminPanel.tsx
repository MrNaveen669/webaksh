import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminBlogPanel() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState<any[]>([]);

  const fetchBlogs = async () => {
    const res = await axios.get("/blogs");
    setBlogs(res.data);
  };

  const createBlog = async () => {
    await axios.post("/blogs", { title, content });
    setTitle("");
    setContent("");
    fetchBlogs();
  };

  const deleteBlog = async (id: string) => {
    await axios.delete(`/blogs/${id}`);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create Blog</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        style={{ display: "block", marginBottom: "1rem", width: "100%", height: "150px" }}
      />
      <button onClick={createBlog}>Create</button>

      <h3>Existing Blogs</h3>
      {blogs.map((blog) => (
        <div key={blog._id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <h4>{blog.title}</h4>
          <p>{blog.content.slice(0, 100)}...</p>
          <button onClick={() => deleteBlog(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
