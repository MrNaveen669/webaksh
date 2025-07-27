import { useEffect, useState } from "react";
import type { Blog } from "../../../shared/schema";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/blogs");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("API response is not an array:", data);
          setError("Invalid data format received from server");
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="mt-4">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="mt-4 text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid gap-4 mt-4">
        {blogs.length === 0 ? (
          <div>No blogs available</div>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <div className="mt-2">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded"
                  />
                )}
              </div>
              <p className="mt-2 text-gray-600">{blog.content}</p>
              <div className="mt-4 text-sm text-gray-500">
                Posted on {new Date(blog.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}