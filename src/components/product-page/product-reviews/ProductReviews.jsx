// ProductReviews.jsx

import CustomerReview from "./CustomerReview";
import styles from '../ProductPage.module.scss';
import { useState } from "react";
import useForm from "../../../hooks/useForm";
import { useTheme } from "../../../store/ThemeContext";

/**
 * Displays a list of customer reviews for a product and includes a form for adding a new review.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.reviews - An array of review objects for the product.
 * @param {Object} props.product - The product being reviewed.
 *
 * @returns {JSX.Element} The rendered ProductReviews component.
 */
const ProductReviews = ({ reviews, product }) => {
  const [showForm, setShowForm] = useState(false);
  const { isDarkMode } = useTheme();
  const reviewButtonText = !showForm ? 'Leave a review' : 'Cancel';

  const { formData, handleChange, handleSubmit, isError, isSubmit } = useForm({
    name: '',
    email: '',
    rating: 5,
    reviewTitle: '',
    review: ''
  });

  const handleClick = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  }

  const submitForm = () => {
    handleClick();
  }

  return (
    <div className={`${styles['product-reviews']} ${isDarkMode ? styles['dark'] : ''}`}>
      <h3>Customer Reviews</h3>
      {isSubmit && !showForm ? <p id={styles['thankyou']}>Thank you for leaving a review!</p> : ''}
      <button onClick={handleClick} className={styles['write-a-review']} aria-label={reviewButtonText}>{reviewButtonText}</button>
      {isError && showForm ? <p className="error-message" id={styles['review-error']} aria-live="assertive" role="alert">Please fill out all fields</p> : ''}
      {showForm ? <form onSubmit={(e) => handleSubmit(e, submitForm)} className='main-form' id={styles['review-form']}>
        <label htmlFor="name">Full name</label>
        <input
          placeholder="First Name"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-invalid={isError ? "true" : "false"}
          aria-describedby={isError ? "review-error" : undefined}
        />
        <label htmlFor="email">Email</label>
        <input
          placeholder="Email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-describedby={isError ? "review-error" : undefined}
        />
        <div>RATING SELECT</div>
        <label htmlFor="reviewTitle">Review title</label>
        <input
          placeholder="Review Title"
          type="text"
          id="reviewTitle"
          value={formData.reviewTitle}
          onChange={handleChange}
          required
          aria-describedby={isError ? "review-error" : undefined}
        />
        <label htmlFor="review">Review</label>
        <textarea
          placeholder="Comments"
          type="text"
          id="review"
          value={formData.review}
          onChange={handleChange}
          required
          aria-describedby={isError ? "review-error" : undefined}
        />
        <button id={styles['submit-review-button']} className="btn-primary" type="submit" aria-label="Submit review">Submit Review</button>
      </form> : ''}
      {reviews.map((review, index) => (
        <CustomerReview key={index} review={review} />
      ))}
    </div>
  );
}

export default ProductReviews;