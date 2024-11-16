import { useContext } from "react";
import { products, reviews } from "../data";
import CartContext from "../../store/CartContext";

/**
 * Utility function to find item in array.
 * @param {any} array 
 * @param {number} itemId 
 * @returns {Object} Found item in array.
 */
export const findItemInArray = (array, itemId) => {
  const foundItem = array.find(arrayItem => arrayItem.id === itemId);
  return foundItem;
}

/**
 * Parses a UK formatted date string into a Date object.
 * @param {string} ukDate - The date in DD/MM/YYYY format.
 * @returns {Date} JavaScript Date object.
 */
export const parseDate = (ukDate) => {
  const [day, month, year] = ukDate.split('/');
  return new Date(`${month}/${day}/${year}`);
}

/**
 * Calculates the time elapsed since a given date in a human-readable format.
 * @param {string} date - The date in DD/MM/YYYY format.
 * @returns {string} String representing the time elapsed (e.g., "2 days ago").
 */
export const timeSince = (date) => {
  const parsedDate = parseDate(date);
  const now = new Date();
  const reviewDate = new Date(parsedDate);
  const diffInSeconds = Math.floor((now - reviewDate) / 1000);

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 }
  ];

  for (let unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval > 1 ? 's' : ''} ago`;
    }
  }
  
  return 'Just now';
}

/**
 * Calculates the average rating from a list of reviews.
 * @param {Array} reviews - An array of review objects with a `rating` property.
 * @returns {number} The average rating, rounded to the nearest integer.
 */
export const calculateAverageRating = (reviews) => {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;
  return Math.round(averageRating);
}

/**
 * Retrieves reviews for a given product.
 * @param {Object} product - The product object to get reviews for.
 * @returns {Array} Array of reviews related to the product.
 */
export const getProductReviews = (product) => {
  const productReviews = reviews.filter(review => product.id === review.productId);

  return productReviews;
}

/**
 * Retrieves products for a specific collection.
 * @param {Object} collection - The collection object to get products for.
 * @returns {Array} An array of products in the collection.
 */
export const getCollectionProducts = (collection) => {
  let collectionProducts;

  if (collection.path === 'all') {
    collectionProducts = products;
    return collectionProducts
  }

  collectionProducts = products.filter(product => collection.id === product.collectionId);


  return collectionProducts;
}

/**
 * Calculates the total price of all items in the cart.
 * @returns {string} The total price, formatted as a string with two decimal places.
 */
export const getTotalCartPrice = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((accumulator, currentItem) => {
    const price = parseFloat(currentItem.price.replace('£', '') * currentItem.quantity);
    return accumulator + price;
  }, 0).toFixed(2);

  return totalPrice;
}

/**
 * Saves the cart to local storage.
 * @param {Array} cart - The cart array to save.
 */
export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Loads the cart from local storage.
 * @returns {Array} The cart array from local storage, or an empty array if none exists.
 */
export const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
}

/**
 * Saves the theme to local storage.
 * @param {boolean} isDarkMode - Whether dark mode is active.
 */
export const saveThemeToLocalStorage = (isDarkMode) => {
  localStorage.setItem('theme', JSON.stringify(isDarkMode));
}

/**
 * Loads the theme from local storage.
 * @returns {boolean} The theme setting (true for dark mode, false for light mode).
 */
export const loadThemeFromLocalStorage = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : false;
}