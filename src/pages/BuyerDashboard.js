import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaAddressBook, FaInfoCircle, FaUserCircle, FaShoppingCart, FaHeart, FaCog, FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; 

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { currentUser, logout } = useAuth();
  const [cartItemsCount] = useState(3); // Temporary cart items count - replace with your actual cart state

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <Link to="/buyerdashboard/home" className="flex items-center space-x-2">
                <img src={logo} alt="AgriConnect Logo" className="h-8 w-8 object-contain" />
                <span className="text-xl font-bold text-green-600">AgriConnect</span>
              </Link>
            </div>
            
            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/buyer-dashboard/home"
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2"
              >
                <FaHome className="mr-1" />
                Home
              </Link>
              <Link
                to="/buyer-dashboard/products"
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2"
              >
                <FaShoppingBag className="mr-1" />
                Products
              </Link>
              <Link
                to="/buyer-dashboard/about"
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2"
              >
                <FaInfoCircle className="mr-1" />
                About
              </Link>
              <Link
                to="/buyer-dashboard/contact"
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2"
              >
                <FaAddressBook className="mr-1" />
                Contact
              </Link>
            </div>

            {/* Right Side Icons (Profile + Cart) */}
            <div className="flex items-center space-x-4">
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center text-sm rounded-full focus:outline-none"
                >
                  <FaUserCircle className="h-8 w-8 text-green-600" />
                </button>

                {showProfileDropdown && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <Link
                      to="/buyer-dashboard/orders"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <FaShoppingCart className="mr-2" />
                      My Orders
                    </Link>
                    <Link
                      to="/buyer-dashboard/wishlist"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <FaHeart className="mr-2" />
                      My Wishlist
                    </Link>
                    <Link
                      to="/buyer-dashboard/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <FaCog className="mr-2" />
                      Settings
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Cart Icon - Placed to the right of profile icon */}
              <Link
                to="/buyer-dashboard/cart"
                className="flex items-center text-gray-700 hover:text-green-600 relative p-2"
              >
                <FaShoppingCart className="text-xl" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (hamburger menu) */}
      <div className="md:hidden bg-white border-t fixed bottom-0 w-full">
        <div className="flex justify-around">
          <Link
            to="/buyerdashboard/home"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-green-600"
          >
            <FaHome className="text-xl" />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/buyerdashboard/products"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-green-600"
          >
            <FaShoppingBag className="text-xl" />
            <span className="text-xs">Products</span>
          </Link>
          <Link
            to="/buyerdashboard/cart"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-green-600 relative"
          >
            <FaShoppingCart className="text-xl" />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
            <span className="text-xs">Cart</span>
          </Link>
          <Link
            to="/buyerdashboard/wishlist"
            className="flex flex-col items-center p-2 text-gray-600 hover:text-green-600"
          >
            <FaHeart className="text-xl" />
            <span className="text-xs">Wishlist</span>
          </Link>
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex flex-col items-center p-2 text-gray-600 hover:text-green-600"
          >
            <FaUserCircle className="text-xl" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About AgriConnect</h3>
              <p className="text-sm">
                Connecting farmers directly with buyers to create a sustainable agricultural ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/buyer-dashboard/home" className="text-sm hover:underline">Home</Link></li>
                <li><Link to="/buyer-dashboard/products" className="text-sm hover:underline">Products</Link></li>
                <li><Link to="/buyer-dashboard/about" className="text-sm hover:underline">About Us</Link></li>
                <li><Link to="/buyer-dashboard/contact" className="text-sm hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm hover:underline">FAQs</Link></li>
                <li><Link to="#" className="text-sm hover:underline">Shipping Policy</Link></li>
                <li><Link to="#" className="text-sm hover:underline">Returns & Refunds</Link></li>
                <li><Link to="#" className="text-sm hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="text-sm not-italic">
                <p>123 Farm Road</p>
                <p>Agriculture City, AC 12345</p>
                <p>Email: info@agriconnect.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-6 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} AgriConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuyerDashboard;