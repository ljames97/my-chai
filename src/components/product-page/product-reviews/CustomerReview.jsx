// CustomerReview.jsx

import StarRating from "./StarRating";
import styles from '../ProductPage.module.scss';
import ReviewDate from "./ReviewDate";

const CustomerReview = ({ review }) => {
  return (
    <div className={styles['customer-review']}>
      <StarRating rating={review.rating}/>
      <p className={styles['review-name']}>{review.name}</p>
      <ReviewDate date={review.date}/>
      <p className={styles['review-title']}>{review.title}</p>
      <p className={styles['review-description']}>{review.description}</p>
    </div>
  )
}

export default CustomerReview;