import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from "../../images/logo1.png"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 text-primary p-4 bg-blueLight bg-opacity-55 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
           <img src={logo} className='h-14' alt="" />
        </div>
        <nav className="hidden md:flex flex-grow justify-end items-center space-x-4 mr-3">
          <Link to="/" className="hover:text-blueDark">Home</Link>
          <Link to="/about" className="hover:text-blueDark">About</Link>
          <Link to="/services" className="hover:text-blueDark">Services</Link>
          <Link to="/blog" className="hover:text-blueDark">News</Link> 
          <Link to="/maritime" className="hover:text-blueDark">Careers</Link> 
          <Link to="/contact" className="hover:text-blueDark">Contact</Link>
        </nav>
        <div className="hidden md:flex space-x-4">
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
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-primary text-black p-4">
          <Link to="/" className="block py-2 hover:text-blueDark" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-blueDark" onClick={toggleMenu}>About</Link>
          <Link to="/services" className="block py-2 hover:text-blueDark" onClick={toggleMenu}>Services</Link>
          <Link to="/news" className="block py-2 hover:text-blueDark" onClick={toggleMenu}>News</Link>
          <Link to="/maritime" className="block py-2 hover:text-blueDark" onClick={toggleMenu}>Careers</Link>
          <Link to="/contact" className="block py-2 hover:text-blueDark" onClick={toggleMenu}>Contact</Link>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blueDark border-2 border-black rounded-full p-2">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blueDark border-2 border-black rounded-full p-2">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-blueDark border-2 border-black rounded-full p-2">
              <FaYoutube size={20} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
