// ProductHeader.jsx

import StarRating from "../product-reviews/StarRating";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import styles from '../ProductPage.module.scss';
import { calculateAverageRating } from "../../global/globalUtils";

const ProductHeader = ({ product }) => {

  const productRating = calculateAverageRating(product.reviews);

  return (
    <div className={styles['product-header']}>
      <ProductImage image={product.image}/>
      <StarRating rating={productRating}/>
      <ProductTitle title={product.title}/>
      <ProductPrice price={product.price}/>
    </div>
  )
}

export default ProductHeader;