// cartService.js

import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addToCartDatabase = async (userId, product) => {
  try {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      cart: arrayUnion({ product })
    })
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
}

export const removeFromCartDatabase = async (userId, productId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    const cart = userSnap.data().cart || [];

    const updatedCart = cart.filter(item => item.product.originalId !== productId);

    await updateDoc(userRef, {
      cart: updatedCart
    });

    console.log("Product removed from cart in Firestore");
  } catch (error) {
    console.error("Error removing product from cart:", error);
  }
}

export const updateQuantityDatabase = async (userId, product, quantity) => {
  try {
    const userRef = doc(db, "users", userId);

    const userSnap = await getDoc(userRef);
    const cart = userSnap.data().cart || [];

    const updatedCart = cart.map(item => {
      if (item.product.productId === product.productId) {
        return {
          ...item, 
          product: {
            ...item.product, 
            quantity: quantity
          }
        };
      }
      return item;
    });

    await updateDoc(userRef, { cart: updatedCart });

    console.log("Quantity updated successfully!");
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

export const getCartFromDatabase = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
  
    const cart = userSnap.data().cart || [];
    const cartArray = cart.map(item => item.product);
    return cartArray;
  } catch (error) {
    console.error("Error loading user cart");
  }

}