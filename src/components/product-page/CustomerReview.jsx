// CustomerReview.jsx

import StarRating from "./StarRating";

const CustomerReview = ({ review }) => {
  return (
    <div className="customer-review">
      <StarRating rating={review.rating}/>
      <p className="review-name">{review.name}</p>
      <p className="review-title">{review.title}</p>
      <p className="review-description">{review.description}</p>
    </div>
  )
}

export default CustomerReview;