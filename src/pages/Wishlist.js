import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaSearch, FaShoppingCart, FaRegHeart, FaTimes, FaRegClock } from 'react-icons/fa';
import apple from '../assets/images/apple.jpeg'
import carrot from '../assets/images/carrot.jpg'
import milk from '../assets/images/milk.webp'

import spinach from '../assets/images/spinach.webp'
const Wishlist = () => {
  // Sample wishlist data - replace with actual data from your API
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 'PROD-1001',
      name: 'Organic Apples',
      price: 2.99,
      originalPrice: 3.49,
      image: apple,
      inStock: true,
      rating: 4.5,
      farmer: 'Green Valley Farms',
      addedDate: '2023-06-10'
    },
    {
      id: 'PROD-1002',
      name: 'Fresh Carrots',
      price: 1.49,
      originalPrice: 1.99,
      image: carrot,
      inStock: false,
      rating: 4.2,
      farmer: 'Sunny Acres',
      addedDate: '2023-06-05'
    },
    {
      id: 'PROD-1003',
      name: 'milk',
      price: 4.99,
      originalPrice: 4.99,
      image: milk,
      inStock: true,
      rating: 4.8,
      farmer: 'Happy Hen Farm',
      addedDate: '2023-05-28'
    },
    {
      id: 'PROD-1004',
      name: 'Organic Spinach',
      price: 3.49,
      originalPrice: 3.99,
      image: spinach,
      inStock: true,
      rating: 4.3,
      farmer: 'Green Valley Farms',
      addedDate: '2023-05-20'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(wishlistItems);
  const [sortOption, setSortOption] = useState('recent');
  const [loading, setLoading] = useState(false);

  // Filter and sort items
  useEffect(() => {
    setLoading(true);
    
    let results = wishlistItems;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.farmer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'recent':
        results.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
        break;
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    setFilteredItems(results);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchTerm, sortOption, wishlistItems]);

  const removeFromWishlist = (productId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const moveToCart = (product) => {
    // In a real app, you would call an API to move to cart
    console.log('Moving to cart:', product);
    removeFromWishlist(product.id);
    // Add your cart logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
          <FaHeart className="text-red-500 mr-3" />
          My Wishlist
        </h1>
        <p className="text-gray-600">
          {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search your wishlist..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
            <select
              id="sort"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="recent">Recently Added</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Wishlist Items */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <FaRegHeart className="mx-auto text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {searchTerm ? 'No matching items found' : 'Your wishlist is empty'}
          </h3>
          <p className="text-gray-500 mb-4">
            {searchTerm ? 'Try a different search term' : 'Start adding products you love'}
          </p>
          <Link
            to="/buyer-dashboard/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-200">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                {!item.inStock && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Out of Stock
                  </div>
                )}
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                  aria-label="Remove from wishlist"
                >
                  <FaTimes className="text-gray-500" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <FaHeart className="text-red-500" />
                    <span className="text-sm text-gray-500">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">From {item.farmer}</p>
                
                <div className="flex items-center mb-3">
                  <span className="font-bold text-green-600 text-lg">${item.price.toFixed(2)}</span>
                  {item.originalPrice > item.price && (
                    <span className="ml-2 text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => moveToCart(item)}
                    disabled={!item.inStock}
                    className={`flex-1 flex items-center justify-center py-2 px-4 rounded-lg ${
                      item.inStock 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <FaShoppingCart className="mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Notify Me'}
                  </button>
                  
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg flex items-center justify-center">
                    <FaRegClock className="mr-2" />
                    Save
                  </button>
                </div>

                <div className="mt-3 text-xs text-gray-500 flex items-center">
                  <FaRegClock className="mr-1" />
                  Added on {new Date(item.addedDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bulk Actions (visible when items exist) */}
      {filteredItems.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow p-4 flex flex-wrap justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} selected
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg flex items-center">
              <FaShoppingCart className="mr-2" />
              Add All to Cart
            </button>
            <button 
              className="bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded-lg flex items-center"
              onClick={() => {
                if (window.confirm('Are you sure you want to remove all items from your wishlist?')) {
                  setWishlistItems([]);
                }
              }}
            >
              <FaTimes className="mr-2" />
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;