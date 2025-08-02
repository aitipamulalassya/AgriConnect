import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updateCartQuantity } = useCart(); // make sure you add these in your context
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 50 ? 0 : 5.99;
  const discount = appliedCoupon ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - discount;

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'FRESH10') {
      setAppliedCoupon({ code: 'FRESH10', discount: '10%' });
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
    setTimeout(() => {
      alert('Checkout complete (mock)');
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold flex items-center text-green-700 mb-6">
        <FaShoppingCart className="mr-3" /> Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center bg-white p-8 rounded shadow">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link to="/buyer-dashboard/products" className="bg-green-600 text-white px-4 py-2 rounded">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded shadow overflow-hidden">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                      <FaMinus />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                      <FaPlus />
                    </button>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:w-1/3 bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="mb-4">
              <label className="block text-sm mb-1">Coupon Code</label>
              {appliedCoupon ? (
                <div className="flex justify-between items-center bg-green-100 p-2 rounded">
                  <span>{appliedCoupon.code}</span>
                  <button onClick={removeCoupon} className="text-red-500">Remove</button>
                </div>
              ) : (
                <div className="flex">
                  <input
                    className="flex-1 border px-2 py-1 rounded-l"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="FRESH10"
                  />
                  <button onClick={applyCoupon} className="bg-gray-800 text-white px-4 py-1 rounded-r">
                    Apply
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600">- ${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={proceedToCheckout}
              disabled={isCheckingOut}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            >
              {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
