import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import contactImg from '../assets/images/bg.png';
import mapImg from '../assets/images/bg.png';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from farmers, buyers, and partners
        </p>
      </section>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Contact Information */}
        <div className="bg-green-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <FaPhone className="text-green-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Phone Support</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 87654 32109</p>
                <a 
                  href="https://wa.me/919876543210" 
                  className="inline-flex items-center mt-2 text-green-600 hover:text-green-700"
                >
                  <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-green-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">farmers@agriconnect.in</p>
                <p className="text-gray-600">support@agriconnect.in</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaMapMarkerAlt className="text-green-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Headquarters</h3>
                <p className="text-gray-600">
                  AgriConnect Pvt. Ltd.<br />
                  #24, Farm Tower, MG Road<br />
                  Bengaluru, Karnataka 560001
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaClock className="text-green-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 8AM to 8PM</p>
                <p className="text-gray-600">Sunday: 10AM to 4PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-gray-700 mb-1">I am a</label>
              <select 
                id="role" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select your role</option>
                <option value="farmer">Farmer/Grower</option>
                <option value="buyer">Buyer/Retailer</option>
                <option value="partner">Logistics Partner</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your message or inquiry"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Location Map */}
      

      {/* Farmer Support CTA */}
      
    </div>
  );
};

export default ContactPage;