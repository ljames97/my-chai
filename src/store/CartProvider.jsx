// CartProvider.jsx

import { useEffect, useState } from "react"
import CartContext from "./CartContext";
import useAuth from "../hooks/useAuth";
import { addToCartDatabase, clearUserCart, getCartFromDatabase, removeFromCartDatabase, updateQuantityDatabase } from "../firebase/cartService";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "../components/global/globalUtils";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCartFromLocalStorage());
  const user = useAuth();

  const addToCart = async (product) => {
    setCart((prevCart) => [...prevCart, product]);
    if (user) {
      await addToCartDatabase(user.uid, product);
    }
  };

  useEffect(() => {
    const loadCart = async () => {
      if (user) {
        const userCart = await getCartFromDatabase(user.uid);
        setCart(userCart);
      }
    }

    loadCart();
  }, [user]);

  useEffect(() => {
    saveCartToLocalStorage(cart);
    console.log(cart);
  }, [cart]);

  const removeFromCart = async (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
    if (user) {
      await removeFromCartDatabase(user.uid, product.originalId)
    }
  };

  const clearCart = async () => {
    setCart([]);
    if (user) {
      await clearUserCart(user.uid);
    }
  }

  const updateQuantity = async (product, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
    if (user) {
      await updateQuantityDatabase(user.uid, product, quantity);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}