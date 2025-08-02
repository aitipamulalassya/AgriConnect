const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
        <div className="bg-white rounded shadow p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div>
                <h4 className="font-semibold text-lg text-green-800">{item.name}</h4>
                <p className="text-gray-600">₹{item.price} × {item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Subtotal: ₹{subtotal.toFixed(2)}</h3>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
