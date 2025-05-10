import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import tes3 from '../assets/images/testiml3.jpg';
import tes2 from '../assets/images/tes2.avif';
import tes1 from '../assets/images/tes1.avif';
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "AgriConnect helped me double my income by cutting out middlemen. Now I sell directly to customers!",
      name: "Raju Patel",
      role: "Farmer from Gujarat",
      rating: 5,
      image: tes1
    },
    {
      id: 2,
      quote: "The vegetables I get are fresher than supermarket produce and at better prices. Highly recommended!",
      name: "Priya Sharma",
      role: "Home Chef, Mumbai",
      rating: 5,
      image: tes2
    },
    {
      id: 3,
      quote: "As a restaurant owner, I get consistent quality and traceability for all my ingredients.",
      name: "Vikram Singh",
      role: "Restaurant Owner, Delhi",
      rating: 4,
      image: tes3
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          What Our Community Says
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="text-gray-600 mb-4">
                <FaQuoteLeft className="text-green-200 text-xl mb-2" />
                <p className="italic">{testimonial.quote}</p>
              </div>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;