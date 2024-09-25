"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogData } from "@/data/blogData";
import BlogCard from "./BlogCard";


export default function Blogs() {
 
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            
          />
        ))}
      </div>
    </div>
  );
}