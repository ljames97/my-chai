// ProductPage.jsx

import AddToCart from "./AddToCart";
import ProductDescription from "./ProductDescription";
import ProductHeader from "./product-header/ProductHeader";

const ProductPage = ({ product }) => {

  return (
    <div>
      <ProductHeader product={product} />
      <AddToCart />
      <ProductDescription />
    </div>
  )
}

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

export default ProductPage;