import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { fetchAllNews } from '../../api/news';
import axios from 'axios';

// Define the structure of a Category
interface Category {
  id: number;
  name: string;
}

// Define the structure of a NewsItem
interface NewsItem {
  id: number;
  title: string;
  image: string;
  category_name: string;
  description: string;
}

// Define the structure of the API response
interface NewsResponse {
  newsList: NewsItem[];
  categories: Category[];
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response: { data: NewsResponse } = await fetchAllNews();
        if (response?.data) {
          setNewsList(response.data.newsList || []);
          const categoryNames = response.data.categories.map((category: Category) => category.name);
          setCategories(categoryNames);
        } else {
          setError('No data available.');
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          setError('Failed to fetch news: ' + error.response.data.message);
        } else {
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredNews = newsList.filter((news) => {
    const matchesCategory = selectedCategory === 'all' || news.category_name === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove non-alphanumeric characters
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .trim(); // Remove leading/trailing spaces
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Controls (Category Dropdown & Search Box) */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Category Dropdown */}
          <select
            onChange={handleCategoryChange}
            className="p-2 border border-gray-400 rounded-md w-full sm:w-auto"
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Search Box with Magnifier Icon */}
          <div className="relative flex items-center w-full sm:w-auto">
            <FaSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 pl-10 border border-gray-400 rounded-md w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div key={news.id} className="border rounded-lg p-6 bg-white shadow-md">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${news.image}`}
                alt={news.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <p
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: news.description.split(' ').slice(0, 30).join(' ') }}
              />
              <a
                href={`/blog/${news.id}/${generateSlug(news.title)}`}
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
