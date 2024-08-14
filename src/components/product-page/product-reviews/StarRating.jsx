// StarRating.jsx

import styles from '../ProductPage.module.scss';

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