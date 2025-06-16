import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg.png'
const Hero = () => {
  return (
   <section className="relative flex-grow flex items-center justify-center py-20 px-4">
        {/* Background with Strong Overlay */}
        <div className="absolute inset-0">
          <img 
            src={bg} 
            alt="Farm background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div> {/* Increased opacity */}
        </div>

        {/* Content with Improved Contrast */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Text Container with Semi-Transparent Background */}
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl mb-8 inline-block">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Farm-Fresh Produce
              </span>
              <br />
              
              Direct to Your Doorstep
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto">
              Connecting farmers and buyers directly with zero middlemen
            </p>
          </div>

          {/* High-Contrast Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300"
            >
              Shop Now
            </Link>
            <Link 
              to="/register" 
              className="bg-white/90 hover:bg-white text-green-700 font-bold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300"
            >
              Sell With Us
            </Link>
          </div>

          {/* Stats with Clear Visibility */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              { value: "500+", label: "Farmers" },
              { value: "10K+", label: "Orders" },
              { value: "100%", label: "Organic" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/25 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                <span className="font-bold text-white text-xl">{stat.value}</span>
                <span className="text-white/100 ml-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Hero;