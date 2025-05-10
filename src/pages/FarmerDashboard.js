import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiPackage, FiDollarSign, FiUsers, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi';
import { FaLeaf, FaTractor } from 'react-icons/fa';
import { useNavigate, Outlet } from 'react-router-dom';
const FarmerDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showDropdown, setShowDropdown] = useState(false);

  // Mock data - replace with actual data from your backend
  const stats = [
    { title: "Total Products", value: "24", icon: <FiPackage className="text-2xl" />, change: "+5%", trend: 'up' },
    { title: "Monthly Revenue", value: "$3,450", icon: <FiDollarSign className="text-2xl" />, change: "+12%", trend: 'up' },
    { title: "Active Buyers", value: "48", icon: <FiUsers className="text-2xl" />, change: "+8", trend: 'up' },
    { title: "Harvest Ready", value: "3 crops", icon: <FaLeaf className="text-2xl" />, change: "2 weeks", trend: 'neutral' }
  ];

  const recentOrders = [
    { id: 1, product: "Organic Tomatoes", buyer: "FreshMart", quantity: "50kg", price: "$150", status: "Shipped" },
    { id: 2, product: "Wheat Flour", buyer: "Bakery Co.", quantity: "100kg", price: "$200", status: "Processing" },
    { id: 3, product: "Organic Apples", buyer: "Healthy Foods", quantity: "30kg", price: "$90", status: "Pending" }
  ];
  const handleNavigation = (path) => {
    navigate(path);
    setActiveTab(path.split('/').pop()); // Set active tab based on path
  };
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white p-4 flex flex-col">
        <div className="flex items-center space-x-3 p-4 mb-8">
          <FaTractor className="text-3xl text-green-300" />
          <h1 className="text-xl font-bold">AgroConnect</h1>
        </div>
        
        <div className="flex-1">
          <nav>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'dashboard' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            >
              <FiBarChart2 />
              <span>Dashboard</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('/farmer-dashboard/products')}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'products' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            >
              <FiPackage />
              <span>My Products</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('orders')}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'orders' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            >
              <FiDollarSign />
              <span>Orders</span>
            </button>
            
            <button 
              onClick={() => handleNavigation('/farmer-dashboard/customers')}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg mb-2 ${activeTab === 'customers' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            >
              <FiUsers />
              <span>Customers</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg ${activeTab === 'settings' ? 'bg-green-700' : 'hover:bg-green-700'}`}
            >
              <FiSettings />
              <span>Settings</span>
            </button>
          </nav>
        </div>
        
        <div className="p-4 border-t border-green-700">
          <button 
            onClick={logout}
            className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-green-700"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Farmer Dashboard</h2>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-semibold">
                  {currentUser?.name?.charAt(0) || 'F'}
                </div>
                <span className="hidden md:inline">{currentUser?.name || 'Farmer'}</span>
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white mb-6">
            <h1 className="text-2xl font-bold mb-2">Welcome back, {currentUser?.name || 'Farmer'}!</h1>
            <p className="opacity-90">Here's what's happening with your farm today</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex items-start">
                <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.trend === 'up' ? 'text-green-500' : stat.trend === 'down' ? 'text-red-500' : 'text-gray-500'}`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.product}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.buyer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${order.status === 'Shipped' ? 'bg-green-100 text-green-800' : 
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
              <p className="text-gray-500 mb-4">List your fresh produce to attract more buyers</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                Add Product
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">View Analytics</h3>
              <p className="text-gray-500 mb-4">Track your sales and customer trends</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                View Analytics
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Farm Updates</h3>
              <p className="text-gray-500 mb-4">Check weather and farming tips</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                View Updates
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerDashboard;