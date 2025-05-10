import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaSearch, FaCalendarAlt, FaTruck, FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import apple from '../assets/images/apple.jpeg'
import carrot from '../assets/images/carrot.jpg'
import milk from '../assets/images/milk.webp'
import tomato from '../assets/images/tomato.jpeg'
import spinach from '../assets/images/spinach.webp'
const MyOrders = () => {
  // Sample order data - replace with actual data from your API
  const [orders, setOrders] = useState([
    {
      id: 'ORD-12345',
      date: '2023-06-15',
      status: 'Delivered',
      items: [
        { name: 'Organic Apples', price: 2.99, quantity: 5, image: apple },
        { name: 'Fresh Carrots', price: 1.49, quantity: 3, image: carrot }
      ],
      total: 20.32,
      deliveryAddress: '123 Main St, Cityville, ST 12345'
    },
    {
      id: 'ORD-12346',
      date: '2023-06-10',
      status: 'Shipped',
      items: [
        { name: 'milk', price: 4.99, quantity: 2, image: milk }
      ],
      total: 11.98,
      deliveryAddress: '123 Main St, Cityville, ST 12345'
    },
    {
      id: 'ORD-12347',
      date: '2023-06-05',
      status: 'Processing',
      items: [
        { name: 'Organic Spinach', price: 3.49, quantity: 2, image: spinach },
        { name: 'Tomatoes', price: 2.99, quantity: 4, image: tomato }
      ],
      total: 18.94,
      deliveryAddress: '123 Main St, Cityville, ST 12345'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [loading, setLoading] = useState(false);

  // Filter orders based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter(order => 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredOrders(filtered);
    }
  }, [searchTerm, orders]);

  // In a real app, you would fetch orders from your API here
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <FaCheckCircle className="text-green-500" />;
      case 'Shipped':
        return <FaTruck className="text-blue-500" />;
      case 'Processing':
        return <FaSpinner className="text-yellow-500 animate-spin" />;
      case 'Cancelled':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Orders</h1>
        <p className="text-gray-600">View and manage your order history</p>
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
              placeholder="Search orders or products..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-gray-400" />
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option>All Time</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <FaShoppingBag className="mx-auto text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No orders found</h3>
          <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
          <Link
            to="/buyer-dashboard/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
              {/* Order Header */}
              <div className="border-b border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Order #{order.id}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {order.date}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    {getStatusIcon(order.status)}
                    <span className="ml-2 text-sm">{order.status}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">${order.total.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">{order.items.length} item(s)</div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center py-3 border-b border-gray-100 last:border-0">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div className="ml-4 flex-grow">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      <div className="text-sm text-gray-500">${item.price.toFixed(2)} each</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Delivery to:</span> {order.deliveryAddress}
                  </p>
                </div>
                <div className="space-x-3">
                  <button className="text-sm text-green-600 hover:text-green-800 font-medium">
                    Track Order
                  </button>
                  <button className="text-sm text-green-600 hover:text-green-800 font-medium">
                    View Details
                  </button>
                  {order.status === 'Delivered' && (
                    <button className="text-sm text-green-600 hover:text-green-800 font-medium">
                      Leave Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;