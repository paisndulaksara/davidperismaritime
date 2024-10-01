 
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="xl:container mx-auto px-4 flex justify-between items-center">
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <FaMapMarkerAlt size={20} />
            <span>123 Street, New York City, 43100, United States</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <FaEnvelope size={20} />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone size={20} />
            <span>0114 700 600</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-blue-500 border-2 border-primary rounded-full p-2">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-blue-500 border-2 border-primary rounded-full p-2">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="hover:text-blue-500 border-2 border-primary rounded-full p-2">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
