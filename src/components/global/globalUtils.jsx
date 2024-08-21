import { products, reviews } from "../data";

/**
 * Utility function to find item in array.
 * @param {any} array 
 * @param {number} itemId 
 * @returns Found item in array.
 */
export const findItemInArray = (array, itemId) => {
  const foundItem = array.find(arrayItem => arrayItem.id === itemId);
  return foundItem;
}

export const parseDate = (ukDate) => {
  const [day, month, year] = ukDate.split('/');
  return new Date(`${month}/${day}/${year}`);
}

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

export const calculateAverageRating = (reviews) => {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;
  return Math.round(averageRating);
}

export const getProductReviews = (product) => {
  const productReviews = reviews.filter(review => product.reviewIds.includes(review.id));

  return productReviews;
}

export const getCollectionProducts = (collection) => {
  const collectionProducts = products.filter(product => collection.productIds.includes(product.id));

  return collectionProducts;
}