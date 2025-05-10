import React from 'react';
import { FiUser, FiShoppingBag, FiMail, FiPhone, FiStar } from 'react-icons/fi';

const Customers = () => {
  // Sample customer data - replace with real API data
  const customers = [
    {
      id: 1,
      name: "FreshMart Grocery",
      contact: "John Smith",
      email: "john@freshmart.com",
      phone: "+1 (555) 123-4567",
      orders: 15,
      totalSpent: "$2,450",
      rating: 4.5,
      lastOrder: "2023-05-15"
    },
    {
      id: 2,
      name: "Organic Delights",
      contact: "Sarah Johnson",
      email: "sarah@organic.com",
      phone: "+1 (555) 987-6543",
      orders: 8,
      totalSpent: "$1,200",
      rating: 4.8,
      lastOrder: "2023-05-10"
    },
    {
      id: 3,
      name: "Farmers Market Co-op",
      contact: "Michael Brown",
      email: "michael@fmcoop.com",
      phone: "+1 (555) 456-7890",
      orders: 22,
      totalSpent: "$3,780",
      rating: 4.2,
      lastOrder: "2023-05-12"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Customers</h2>
        <div className="flex space-x-3">
          <input 
            type="text" 
            placeholder="Search customers..." 
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            Add New
          </button>
        </div>
      </div>

      {/* Customer Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <FiUser className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500">Total Customers</p>
              <p className="text-2xl font-bold">48</p>
              <p className="text-sm text-green-500">↑ 12% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <FiShoppingBag className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500">Repeat Customers</p>
              <p className="text-2xl font-bold">32</p>
              <p className="text-sm text-blue-500">67% retention rate</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <FiStar className="text-purple-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500">Average Rating</p>
              <p className="text-2xl font-bold">4.6</p>
              <p className="text-sm text-purple-500">92% satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.lastOrder} (last order)</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.contact}</div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <FiMail className="mr-1" size={14} /> {customer.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <FiPhone className="mr-1" size={14} /> {customer.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.orders} orders
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {customer.totalSpent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 mr-1" />
                      <span>{customer.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 mr-3">View</button>
                    <button className="text-blue-600 hover:text-blue-900">Message</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Communication Section */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Customer Communication</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 hover:border-green-400 transition-colors">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                <FiMail className="text-blue-600" />
              </div>
              <h4 className="font-medium">Email Campaigns</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">Send product updates and promotions</p>
            <button className="text-blue-600 text-sm font-medium">Create Campaign →</button>
          </div>

          <div className="border rounded-lg p-4 hover:border-green-400 transition-colors">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-green-100 rounded-lg mr-3">
                <FiShoppingBag className="text-green-600" />
              </div>
              <h4 className="font-medium">Special Offers</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">Create discounts for loyal customers</p>
            <button className="text-green-600 text-sm font-medium">Create Offer →</button>
          </div>

          <div className="border rounded-lg p-4 hover:border-green-400 transition-colors">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-purple-100 rounded-lg mr-3">
                <FiStar className="text-purple-600" />
              </div>
              <h4 className="font-medium">Feedback Collection</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">Request reviews and testimonials</p>
            <button className="text-purple-600 text-sm font-medium">Request Feedback →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;