// ProductHeader.jsx

import StarRating from "../product-reviews/StarRating";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import styles from '../ProductPage.module.scss';
import { calculateAverageRating, getProductReviews } from "../../global/globalUtils";

const ProductHeader = ({ product, price }) => {
  const productReviews = getProductReviews(product);
  const productRating = calculateAverageRating(productReviews);
  
  return (
    <div className={styles['product-header']}>
      <ProductImage image={product.image}/>
      <StarRating rating={productRating}/>
      <ProductTitle title={product.title}/>
      <ProductPrice price={price}/>
    </div>
  )
}

export default ProductHeader;