// CustomerReview.jsx

import StarRating from "./StarRating";
import styles from '../ProductPage.module.scss';
import ReviewDate from "./ReviewDate";

/**
 * Displays detailed customer review, including the star rating, 
 * reviewer's name, date, title, and description of the review.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.review - Review data.
 *
 * @returns {JSX.Element} Rendered CustomerReview component.
 */
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