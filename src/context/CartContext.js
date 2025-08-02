import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
const removeFromCart = (id) => {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const updateCartQuantity = (id, quantity) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  );
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart, updateCartQuantity  }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
