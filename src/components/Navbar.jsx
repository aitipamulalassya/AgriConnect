import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; // Adjust the path based on your folder structure

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold text-green-700 flex items-center space-x-2">
          <img src={logo} alt="AgriConnect Logo" className="h-8 w-8 object-contain" />
          <span>AgriConnect</span>
        </Link>

        {/* Navigation Links - Center Aligned */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-green-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="text-gray-700 hover:text-green-600 transition-colors font-medium"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-green-600 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-green-600 transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6">
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
            >
              <FaUser className="mr-1" />
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
            >
              Register
            </Link>
          </div>

          {/* Shopping Cart */}
          <Link 
            to="/cart" 
            className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
          >
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
