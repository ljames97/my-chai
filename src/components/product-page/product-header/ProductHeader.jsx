// ProductHeader.jsx

import StarRating from "../product-reviews/StarRating";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import styles from '../ProductPage.module.scss';

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

const calculateAverageRating = (reviews) => {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;
  return Math.round(averageRating);
}

export default ProductHeader;