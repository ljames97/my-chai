// StarRating.jsx

import styles from '../ProductPage.module.scss';

/**
 * Displays 5-star rating
 *
 * @param {Object} props
 * @param {number} props.rating - The rating value (0-5) to display. Rounded down if fractional.
 *
 * @returns {JSX.Element} star rating.
 */
const StarRating = ({ rating }) => {
  return (
    <div className={styles['rating-stars']}>
      {[...Array(5)].map((star, index) => {
        return (
          <span key={index}>
            {index < rating ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  )
}

export default StarRating;