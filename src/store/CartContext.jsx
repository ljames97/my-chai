// CartContext.jsx

import { createContext } from "react";

/**
 * Provider for managing the shopping cart.
 * 
 * - Adds items to the cart
 * - Removes items from the cart
 * - Updates item quantities
 * - Clears the entire cart
 * - Synchronizes the cart with Firebase for authenticated users
 * - Persists the cart to local storage for unauthenticated users
 * 
 * @returns {JSX.Element} value = cart, addToCart, removeFromCart, clearCart, updateQuantity
 */
const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {}
});

export default CartContext;