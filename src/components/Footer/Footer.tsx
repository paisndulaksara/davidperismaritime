 
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="xl:container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt size={20} />
            <span>123 Street, New York City, 43100, United States</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={20} />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone size={20} />
            <span>0114 700 600</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blueDark border-2 border-primary rounded-full p-2">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-blueDark border-2 border-primary rounded-full p-2">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="hover:text-blueDark border-2 border-primary rounded-full p-2">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
