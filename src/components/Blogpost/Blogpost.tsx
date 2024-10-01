 
import { useParams } from 'react-router-dom'; // If using React Router  
import blogData from '../../utils/Blog';
 

const Blogpost = () => {
  const { id } = useParams(); // Capture the blog post ID from the URL
  const blogPost = blogData.find(blog => blog.id === id);

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-64 object-cover mb-6"
        />
        <div className="text-gray-700 text-lg leading-relaxed">
          {blogPost.content}
        </div>
      </div>
    </section>
  );
};

export default Blogpost;
