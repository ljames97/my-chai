// CartProvider.jsx

import { useEffect, useState } from "react"
import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id))
  };

  const updateQuantity = (product, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}