import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      <button className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center justify-center">
        <FaShoppingCart className="mr-2" /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;