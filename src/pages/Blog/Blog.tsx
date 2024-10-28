import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import blogData from '../../utils/Blog.ts';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredBlogs = blogData.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Controls (Category Dropdown & Search Box) */}
        <div className="mb-8 flex justify-between items-center">
          {/* Category Dropdown */}
          <select
            onChange={handleCategoryChange}
            className="p-2 border border-gray-400 rounded-md"
          >
            <option value="all">All Categories</option>
            <option value="Industry News">Industry News</option>
            <option value="Company Updates">Company Updates</option>
            <option value="Logistics Tips">Logistics Tips</option>
          </select>

          {/* Search Box with Magnifier Icon */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 pl-10 border border-gray-400 rounded-md"
            />
          </div>
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
                href={`/blog/${blog.id}`}
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
