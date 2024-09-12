// ReviewCarousel.jsx

import { reviews } from '../data';
import StarRating from '../product-page/product-reviews/StarRating';
import ReviewWidget from './ReviewWidget';
import styles from './homePage.module.scss';

const ReviewCarousel = () => {
  const fiveStarReviews = reviews.filter(review => review.rating === 5);
  return (
    <div className={styles['review-carousel']}>
      <div className={styles['carousel-header']}>
      <h3 className={styles['carousel-heading']}>What our customers are saying</h3>
      <StarRating rating={5}/>
      <p>from {reviews.length} reviews</p>
      </div>
      <div id={styles['reviews']} className={styles['collection-slideshow']}>
      {fiveStarReviews.map((review, index) => (
        <ReviewWidget key={index} review={review}/>
      ))}
      </div>
    </div>
  );
}

export default ReviewCarousel;