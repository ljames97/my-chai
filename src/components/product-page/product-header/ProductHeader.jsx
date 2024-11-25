// ProductHeader.jsx

import StarRating from "../product-reviews/StarRating";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import styles from '../ProductPage.module.scss';
import { calculateAverageRating, getProductReviews } from "../../global/globalUtils";

/**
 * Displays the main details of a product: image, rating, title, and price.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.product - Product data object.
 * @param {number} props.price - Price of the product.
 * @returns {JSX.Element} Rendered ProductHeader component.
 */
const ProductHeader = ({ product, price }) => {
  const productReviews = getProductReviews(product);
  const productRating = calculateAverageRating(productReviews);
  
  return (
    <div className={styles['product-header']}>
      <StarRating rating={productRating}/>
      <ProductTitle title={product.title}/>
      <ProductPrice price={price}/>
    </div>
  )
}

export default ProductHeader;