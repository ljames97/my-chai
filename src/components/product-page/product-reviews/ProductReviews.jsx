// ProductReviews.jsx

import CustomerReview from "./CustomerReview";
import styles from '../ProductPage.module.scss';

const ProductReviews = ({ product }) => {

  return (
    <div className={styles['product-reviews']}>
      <h3>Customer Reviews</h3>
      {product.reviews.map((review, index) => (
        <CustomerReview key={index} review={review} />
      ))}
    </div>
  )
}

export default ProductReviews;