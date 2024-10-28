// ProductReviews.jsx

import CustomerReview from "./CustomerReview";
import styles from '../ProductPage.module.scss';
import { useState } from "react";
import useForm from "../../../hooks/useForm";

const ProductReviews = ({ reviews, product }) => {
  const [showForm, setShowForm] = useState(false);
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
    <div className={styles['product-reviews']}>
      <h3>Customer Reviews</h3>
      {isSubmit && !showForm ? <p id={styles['thankyou']}>Thank you for leaving a review!</p> : ''}
      <button onClick={handleClick} className={styles['write-a-review']}>{reviewButtonText}</button>
      {isError && showForm ? <p className="error-message" id={styles['review-error']}>Please fill out all fields</p> : ''}
      {showForm ? <form onSubmit={(e) => handleSubmit(e, submitForm)} className='main-form' id={styles['review-form']}>
        <input
          placeholder="First Name"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div>RATING SELECT</div>
        <input
          placeholder="Review Title"
          type="text"
          id="reviewTitle"
          value={formData.reviewTitle}
          onChange={handleChange}
        />
        <textarea
          placeholder="Comments"
          type="text"
          id="review"
          value={formData.review}
          onChange={handleChange}
        />
        <button id={styles['submit-review-button']} className="btn-primary" type="submit">Submit Review</button>
      </form> : ''}
      {reviews.map((review, index) => (
        <CustomerReview key={index} review={review} />
      ))}
    </div>
  );
}

export default ProductReviews;