import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuEnter = () => {
    clearTimeout(timeoutRef.current); 
    setIsOpen(true);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 400); 
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="flex items-center space-x-4 text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <img src="/logo.jpg" alt="OrderEase Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-gray-800">OrderEase</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/menu_admin"
            className="text-gray-800 text-lg hover:text-blue-500 transition duration-300"
          >
            Your Menu
          </Link>
          <div
            className="relative group"
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
          >
            <button className="text-gray-800 text-lg hover:text-blue-500 transition duration-300 focus:outline-none">
              More
            </button>
            <div
              className={`absolute ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded mt-2 w-40 z-10`}
            >
              <Link
                to="/admin"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Orders
              </Link>
              <Link
                to="/Reviews"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Customer Feedback
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Log Out
              </Link>
              {/* <Link
                to="/settings_admin"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Settings
              </Link> */}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/menu_admin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Your Menu
          </Link>
          <Link to="/admin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Orders
          </Link>
          <Link to="/Reviews" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Customer Feedback
          </Link>
          <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Log Out
          </Link>
          {/* <Link to="/settings_admin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Settings
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default NavbarAdmin;
