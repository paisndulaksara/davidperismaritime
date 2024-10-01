import React, { useState } from 'react'; 
import blogData from '../../utils/Blog.ts';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredBlogs = selectedCategory === 'all'
    ? blogData
    : blogData.filter(blog => blog.category === selectedCategory);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Category Dropdown */}
        <div className="mb-8">
          <select
            onChange={handleCategoryChange}
            className="p-2 border border-gray-400 rounded-md"
          >
            <option value="all">All Categories</option>
            <option value="Industry News">Industry News</option>
            <option value="Company Updates">Company Updates</option>
            <option value="Logistics Tips">Logistics Tips</option>
          </select>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => (
            <div key={index} className="border rounded-lg p-6 bg-white shadow-md">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <a
                href={`/blog/${blog.id}`} // Assuming there's a routing setup for individual posts
                className="text-blue-600 font-bold"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
