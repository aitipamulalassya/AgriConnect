import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">FarmConnect</h3>
            <p className="text-green-100">
              Directly connecting farmers with buyers for fair, transparent, and efficient agricultural trade.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Products</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Farmers</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Buyers</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">How It Works</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition">Fruits</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Vegetables</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Grains</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Dairy</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Organic</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Farm Road, Agricultural City</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>contact@agriconnect.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-green-100 hover:text-white text-xl transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-green-100 hover:text-white text-xl transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-green-100 hover:text-white text-xl transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-green-100 hover:text-white text-xl transition">
              <FaLinkedin />
            </a>
          </div>
          
          <div className="text-green-100 text-sm">
            <p>&copy; {new Date().getFullYear()} AgriConnect. All rights reserved.</p>
            <p className="mt-1">
              <a href="#" className="hover:text-white transition">Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;