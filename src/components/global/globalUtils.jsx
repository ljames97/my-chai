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