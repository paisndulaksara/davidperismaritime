import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchNewsById } from '../../api/news'; // API function to get a single news post

interface NewsPost {
  id: number;
  title: string;
  breadcrumb_image: string;
  description: string;
  content: string;
}

const Blogpost = () => {
  const { id } = useParams<{ id: string }>(); 
  const [blogPost, setBlogPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        const response = await fetchNewsById(id as string);
        if (response?.data) {
          setBlogPost(response.data);
        } else {
          setError('Blog post not found.');
        }
      } catch (error) {
        setError('Failed to load the blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchSingleNews();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${blogPost.breadcrumb_image}`}
          alt={blogPost.title}
          className="w-full h-64 object-cover mb-6"
        />
        <div 
          className="text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blogPost.description }} 
        />
      </div>
    </section>
  );
};

export default Blogpost;
