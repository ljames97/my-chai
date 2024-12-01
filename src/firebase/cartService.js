// cartService.js

import { Timestamp, addDoc, arrayUnion, collection, doc, getDoc, getDocs, runTransaction, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

/**
 * Adds a product to the user's cart in Firestore.
 *
 * @param {string} userId - The unique ID of the user.
 * @param {object} product - The product object to be added to the cart.
 * @throws {Error}
 */
export const addToCartDatabase = async (userId, product) => {
  try {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      cart: arrayUnion({ product })
    })
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Removes a product from the user's cart in Firestore.
 *
 * @param {string} userId - The unique ID of the user.
 * @param {string} productId - The unique ID of the product to be removed.
 * @throws {Error} 
 */
export const removeFromCartDatabase = async (userId, productId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    const cart = userSnap.data().cart || [];

    const updatedCart = cart.filter(item => item.product.originalId !== productId);

    await updateDoc(userRef, {
      cart: updatedCart
    });
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Clears the user's cart in Firestore.
 *
 * @param {string} userId - The unique ID of the user.
 * @throws {Error}
 */
export const clearUserCart = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const updatedCart = [];

    await updateDoc(userRef, {
      cart: updatedCart
    });
  } catch (error) {
    throw new Error(error.message);
  }
    
}

/**
 * Updates the quantity of a specific product in the user's cart in Firestore.
 *
 * @param {string} userId - The unique ID of the user.
 * @param {object} product - The product object to update.
 * @param {number} quantity - The new quantity of the product.
 * @throws {Error}
 */
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
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Retrieves the user's cart from Firestore.
 *
 * @param {string} userId - The unique ID of the user.
 * @returns {Array} - An array of product objects in the cart.
 * @throws {Error}
 */
export const getCartFromDatabase = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
  
    const cart = userSnap.data().cart || [];
    const cartArray = cart.map(item => item.product);
    return cartArray;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Saves an order to Firestore under the user's orders collection.
 *
 * @param {Array} orderItems - An array of product objects representing the order.
 * @throws {Error}
 */
export const saveOrderToFirestore = async (orderItems) => {
  const user = auth.currentUser;
  if (!user) return;

  const orderNumber = await getNextOrderNumber();
  
  const orderData = {
    items: orderItems,
    createdAt: Timestamp.now(),
    orderNumber: orderNumber
  };
  
  try {
    const ordersCollection = collection(db, `users/${user.uid}/orders`);
    await addDoc(ordersCollection, orderData);
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Retrieves the next order number from Firestore and increments the order counter.
 *
 * @returns {number} - Next order number.
 * @throws {Error}
 */
export const getNextOrderNumber = async () => {
  const orderCounterRef = doc(db, "counters", "orderCounter");

  return await runTransaction(db, async (transaction) => {
    const orderCounterDoc = await transaction.get(orderCounterRef);
    
    if (!orderCounterDoc.exists()) {
      throw new Error("Order counter does not exist!");
    }

    const currentOrderNumber = orderCounterDoc.data().currentOrderNumber || 1001;
    const newOrderNumber = currentOrderNumber + 1;

    transaction.update(orderCounterRef, { currentOrderNumber: newOrderNumber });

    return newOrderNumber;
  });
};

/**
 * Retrieves the user's order history from Firestore.
 *
 * @returns {Array} - Array of order objects.
 * @throws {Error}
 */
export const getOrderHistory = async () => {
  const user = auth.currentUser;
  if (!user) return [];

  try {
    const ordersRef = collection(db, `users/${user.uid}/orders`);
    const orderDocs = await getDocs(ordersRef);
    
    const orderHistory = orderDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return orderHistory;
  } catch (error) {
    return [];
  }
};