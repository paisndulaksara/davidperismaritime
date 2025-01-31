import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from "../../images/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0   text-primary pb-4 bg-blueLight bg-opacity-55 z-50">
      <div className="xl:container mx-auto flex justify-between items-center px-4">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4 pt-4">
          <img src={logo} className="h-14" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-grow justify-end items-center uppercase space-x-12 mr-8">
          <Link to="/" className="hover:text-blueDark">Home</Link>
          <Link to="/about" className="hover:text-blueDark">About</Link>
          <Link to="/services" className="hover:text-blueDark">Services</Link>
          <Link to="/blog" className="hover:text-blueDark">News</Link> 
          <Link to="/careeres" className="hover:text-blueDark">Careers</Link> 
          <Link to="/contact" className="hover:text-blueDark">Contact</Link>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex space-x-4">
          {/* <a href="#" className="hover:text-blueDark border-2 border-primary rounded-full p-2">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-blueDark border-2 border-primary rounded-full p-2">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="hover:text-blueDark border-2 border-primary rounded-full p-2">
            <FaYoutube size={20} />
          </a> */}
        </div>

        {/* Hamburger Menu (for mobile & tablet) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-blueLight text-white p-4">
          <Link to="/" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>About</Link>
          <Link to="/services" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>Services</Link>
          <Link to="/news" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>News</Link>
          <Link to="/careeres" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>Careers</Link>
          <Link to="/contact" className="block py-2 hover:text-gray-200" onClick={toggleMenu}>Contact</Link>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-200 border-2 border-white rounded-full p-2">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 border-2 border-white rounded-full p-2">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 border-2 border-white rounded-full p-2">
              <FaYoutube size={20} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
