import React from 'react';
import { FaLeaf, FaHandshake, FaChartLine, FaTruck } from 'react-icons/fa';
import teamImg from '../assets/images/bg.png';
import farmImg from '../assets/images/bg.png';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
          About AgriConnect
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bridging the gap between farmers and buyers through transparent, direct trade
        </p>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, AgriConnect began as a small initiative to help local farmers in Karnataka 
            bypass exploitative middlemen. What started as a WhatsApp group connecting 15 farmers to 
            Bangalore households has grown into a pan-India platform serving over 5,000 farmers.
          </p>
          <p className="text-gray-600">
            Today, we're proud to facilitate <span className="font-semibold text-green-600">₹18+ crore</span> in 
            direct transactions annually while maintaining our core mission - fair prices for farmers 
            and fresh produce for buyers.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src={farmImg} 
            alt="Farmers working in field" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-green-50 rounded-xl p-8 mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Mission</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaLeaf className="text-4xl text-green-600 mb-4" />,
              title: "Fresh Produce",
              desc: "Deliver farm-fresh goods within 24 hours of harvest"
            },
            {
              icon: <FaHandshake className="text-4xl text-green-600 mb-4" />,
              title: "Fair Trade",
              desc: "Farmers earn 40-60% more by eliminating middlemen"
            },
            {
              icon: <FaChartLine className="text-4xl text-green-600 mb-4" />,
              title: "Market Access",
              desc: "Connect small farmers to national buyers"
            },
            {
              icon: <FaTruck className="text-4xl text-green-600 mb-4" />,
              title: "Efficient Logistics",
              desc: "Cold-chain network across 12 states"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={teamImg} 
              alt="AgriConnect team" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              AgriConnect is powered by a diverse team of agriculture experts, tech innovators, 
              and supply chain specialists united by a common vision.
            </p>
            <ul className="space-y-4">
              {[
                "3rd-generation farmers understanding ground realities",
                "IIT/IIM graduates building the tech platform",
                "Logistics partners with 15+ years experience",
                "Food safety certification experts"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a farmer looking for better prices or a buyer seeking fresher produce, 
          we'd love to connect with you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            Farmer Registration
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-green-700 transition">
            Buyer Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;