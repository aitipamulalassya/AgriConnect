import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaArrowRight } from 'react-icons/fa';
import vegetables from '../assets/images/vegetables.jpg';
import fruits from '../assets/images/fruits.webp';
import dairy from '../assets/images/dairy.webp';
import grains from '../assets/images/grains.jpg';
import manogos from '../assets/images/mangos.jpg';
import corn from '../assets/images/corn.webp';
import pumpkins from '../assets/images/pumpkins.webp';
import watermelons from '../assets/images/watermelon.jpg';
const ProductCategories = () => {
  const categories = [
    {
      name: 'Vegetables',
      image: vegetables,
      count: 42,
      popularItems: ['Tomatoes', 'Carrots', 'Spinach']
    },
    {
      name: 'Fruits',
      image: fruits,
      count: 36,
      popularItems: ['Bananas', 'Apples', 'Oranges']
    },
    {
      name: 'Dairy',
      image: dairy,
      count: 18,
      popularItems: ['Milk', 'Cheese', 'Yogurt']
    },
    {
      name: 'Grains',
      image: grains,
      count: 24,
      popularItems: ['Rice', 'Wheat', 'Quinoa']
    }
  ];

  const seasonalItems = [
    { name: 'Mangoes', image: manogos, farm: 'Sunny Orchards' },
    { name: 'Corn', image:corn, farm: 'Golden Fields' },
    { name: 'Pumpkins', image: pumpkins, farm: 'Harvest Moon Farm' },
    { name: 'Watermelons', image:watermelons, farm: 'Riverbend Produce' }
  ];

  return (
    <section id="categories" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Categories */}
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Link 
              to={`/products?category=${category.name.toLowerCase()}`}
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <p className="text-green-200 text-sm">
                  {category.count} items • {category.popularItems.join(', ')}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Seasonal Spotlight */}
        <div className="bg-green-50 p-6 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-green-800 flex items-center">
              <FaLeaf className="mr-2 text-green-600" />
              Seasonal Spotlight
            </h3>
            <Link 
              to="/products?filter=seasonal" 
              className="text-green-600 hover:text-green-800 flex items-center mt-2 md:mt-0"
            >
              View all seasonal produce <FaArrowRight className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seasonalItems.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h4 className="font-semibold text-green-800">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.farm}</p>
                <button className="mt-2 w-full bg-green-100 text-green-700 py-1 rounded text-sm hover:bg-green-200 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;