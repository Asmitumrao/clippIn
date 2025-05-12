import React, { useState } from 'react';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Searching for:', query);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              className="text-gray-500 hover:text-[#F8B500] focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-black-800 font-medium relative group py-2">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black-800 font-medium relative group py-2">
                Menu
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black-800 font-medium relative group py-2">
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black-800 font-medium relative group py-2">
                About
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="px-3 py-1.5 border border-gray-300 focus:outline-none focus:border-[#F8B500] w-40"
              />
              <button
                type="submit"
                className="bg-[#F8B500] text-white px-4 py-1.5 hover:bg-[#F8B500] transition"
              >
                <FiSearch className="inline mr-1" size={16} />
                <span className="hidden sm:inline">Search</span>
              </button>
            </form>

            {/* Cart Icon */}
            <div className="relative cursor-pointer text-gray-700 hover:text-[#F8B500]">
              <FiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
                0
              </span>
            </div>

            {/* Sign Up Button */}
            <button className="flex items-center bg-[#F8B500] text-white px-4 py-1.5 rounded-full hover:bg-[#F8B500] transition">
              <FiUser size={18} className="mr-2" />
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-black-800 font-medium relative group py-2">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black-800 font-medium relative group py-2">
                Menu
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black-800 font-medium relative group py-2">
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-black-800 font-medium relative group py-2">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 px-3 py-1.5 border border-gray-300 focus:outline-none focus:border-[#F8B500]-500"
                />
                <button
                  type="submit"
                  className="bg-[#F8B500] text-white px-4 py-1.5 hover:bg-[#F8B500]transition"
                >
                  <FiSearch size={16} />
                </button>
              </form>
              
              <div className="flex items-center justify-between">
                {/* Cart Icon */}
                <div className="relative cursor-pointer text-gray-700 hover:text-[#F8B500]">
                  <FiShoppingCart size={24} />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
                    3
                  </span>
                </div>

                {/* Sign Up Button */}
                <button className="flex items-center bg-[#F8B500] text-white px-4 py-1.5 rounded-lg hover:bg-[#F8B500] transition">
                  <FiUser size={18} className="mr-2" />
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;