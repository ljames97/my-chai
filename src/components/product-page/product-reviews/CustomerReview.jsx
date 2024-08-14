// CustomerReview.jsx

import StarRating from "./StarRating";
import styles from '../ProductPage.module.scss';

const CustomerReview = ({ review }) => {
  return (
    <div className={styles['customer-review']}>
      <StarRating rating={review.rating}/>
      <p className={styles['review-name']}>{review.name}</p>
      <p className={styles['review-title']}>{review.title}</p>
      <p className={styles['review-description']}>{review.description}</p>
    </div>
  )
}

export default CustomerReview;