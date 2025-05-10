import React, { useState } from 'react';
import { FaSearch, FaFilter, FaShoppingCart } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import tomato from '../assets/images/tomato.jpeg';
import banana from '../assets/images/banana.jpg';
import milk from '../assets/images/milk.webp';
import rice from '../assets/images/basmati-rice.jpg';
import papaya from '../assets/images/papaya.webp';
import carrot from '../assets/images/carrot.jpg';
import curd from '../assets/images/curd1.jpeg';
import wheat from '../assets/images/wheat.webp';

const ProductsPage = () => {
  const [products] = useState([
    { id: 1, name: 'Tomatoes', image: tomato, price: 25, category: 'vegetables' },
    { id: 2, name: 'Bananas', image: banana, price: 30, category: 'fruits' },
    { id: 3, name: 'Milk', image: milk, price: 40, category: 'dairy' },
    { id: 4, name: 'Rice', image: rice, price: 50, category: 'grains' },
    { id: 5, name: 'Carrots', image: carrot, price: 35, category: 'vegetables' },
    { id: 6, name: 'Papayas', image: papaya, price: 28, category: 'fruits' },
    { id: 7, name: 'Curd', image: curd, price: 20, category: 'dairy' },
    { id: 8, name: 'Wheat', image: wheat, price: 45, category: 'grains' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {['all', 'vegetables', 'fruits', 'dairy', 'grains'].map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm capitalize ${
                selectedCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;