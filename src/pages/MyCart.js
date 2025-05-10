import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa';
import apple from '../assets/images/apple.jpeg'
import carrot from '../assets/images/carrot.jpg'
import milk from '../assets/images/milk.webp'
const CartPage = () => {
  // Sample cart data - replace with actual data from your API or context
  const [cartItems, setCartItems] = useState([
    {
      id: 'PROD-1001',
      name: 'Organic Apples',
      price: 2.99,
      image: apple,
      farmer: 'Green Valley Farms',
      quantity: 3,
      inStock: true,
      maxQuantity: 10
    },
    {
      id: 'PROD-1002',
      name: 'Fresh Carrots',
      price: 1.49,
      image: carrot,
      farmer: 'Sunny Acres',
      quantity: 2,
      inStock: true,
      maxQuantity: 15
    },
    {
      id: 'PROD-1003',
      name: 'Milk',
      price: 4.99,
      image: milk,
      farmer: 'Happy Hen Farm',
      quantity: 1,
      inStock: false,
      maxQuantity: 5
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 50 ? 0 : 5.99; // Free delivery over $50
  const discount = appliedCoupon ? subtotal * 0.1 : 0; // 10% discount for example
  const total = subtotal + deliveryFee - discount;

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, Math.min(newQuantity, item.maxQuantity)) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    // In a real app, you would validate the coupon with your backend
    if (couponCode.toUpperCase() === 'FRESH10') {
      setAppliedCoupon({
        code: couponCode.toUpperCase(),
        discount: '10%'
      });
    } else {
      alert('Invalid coupon code');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
  };

  const proceedToCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, you would redirect to checkout page
    console.log('Proceeding to checkout with:', cartItems);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      alert('Checkout would complete here. This is just a demo.');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
          <FaShoppingCart className="text-green-600 mr-3" />
          Your Cart
        </h1>
        <p className="text-gray-600">
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <FaShoppingCart className="mx-auto text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
          <Link
            to="/buyer-dashboard/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Cart Items Header */}
              <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4 border-b border-gray-200">
                <div className="col-span-5 font-medium text-gray-600">Product</div>
                <div className="col-span-2 font-medium text-gray-600">Price</div>
                <div className="col-span-3 font-medium text-gray-600">Quantity</div>
                <div className="col-span-2 font-medium text-gray-600 text-right">Total</div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Product Info */}
                      <div className="col-span-12 md:col-span-5 flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 object-cover rounded mr-4"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.farmer}</p>
                          {!item.inStock && (
                            <span className="text-xs text-red-500 mt-1">Out of stock</span>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-4 md:col-span-2">
                        <span className="md:hidden text-sm text-gray-500 mr-2">Price:</span>
                        <span className="font-medium">${item.price.toFixed(2)}</span>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-4 md:col-span-3">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 border border-gray-300 rounded-l hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <FaMinus className="text-xs" />
                          </button>
                          <span className="px-3 py-1 border-t border-b border-gray-300 text-center w-12">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 border border-gray-300 rounded-r hover:bg-gray-100"
                            disabled={item.quantity >= item.maxQuantity}
                          >
                            <FaPlus className="text-xs" />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-span-4 md:col-span-2 flex items-center justify-end">
                        <span className="md:hidden text-sm text-gray-500 mr-2">Total:</span>
                        <span className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="ml-4 text-gray-400 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="p-4 border-t border-gray-200">
                <Link 
                  to="/buyer-dashboard/products"
                  className="inline-flex items-center text-green-600 hover:text-green-800"
                >
                  <FaArrowLeft className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

              {/* Coupon Code */}
              <div className="mb-6">
                <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                  Coupon Code
                </label>
                {appliedCoupon ? (
                  <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                    <div>
                      <span className="font-medium">{appliedCoupon.code}</span>
                      <span className="text-green-600 ml-2">-{appliedCoupon.discount}</span>
                    </div>
                    <button 
                      onClick={removeCoupon}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex">
                    <input
                      type="text"
                      id="coupon"
                      placeholder="Enter coupon code"
                      className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:ring-green-500 focus:border-green-500"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                      onClick={applyCoupon}
                      className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Order Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount ({appliedCoupon.code})</span>
                    <span className="text-green-600 font-medium">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={proceedToCheckout}
                disabled={isCheckingOut || cartItems.some(item => !item.inStock)}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white flex items-center justify-center ${
                  isCheckingOut
                    ? 'bg-green-400'
                    : cartItems.some(item => !item.inStock)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isCheckingOut ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Proceed to Checkout'
                )}
              </button>

              {/* Out of stock warning */}
              {cartItems.some(item => !item.inStock) && (
                <p className="text-red-500 text-sm mt-3">
                  Please remove out of stock items before checkout
                </p>
              )}

              {/* Secure Checkout Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">
                  <svg className="inline-block mr-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4L6 2L8 4" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 10V2" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 8L4 6L2 4" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 8L8 6L10 4" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  100% Secure Checkout
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                <img 
    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
    alt="Visa" 
    className="h-6" 
    title="Visa"
  />
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
    alt="Mastercard" 
    className="h-6" 
    title="Mastercard"
  />
                 <img 
          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
          alt="PayPal" 
          className="h-6 mr-2" 
        />

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;