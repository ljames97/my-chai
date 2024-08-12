// ProductReviews.jsx

import { reviews } from "../data";
import CustomerReview from "./CustomerReview";

const ProductReviews = () => {

  return (
    <div className="product-reviews">
      <h3>Customer Reviews</h3>
      {reviews.map((review, index) => (
        <CustomerReview key={index} review={review} />
      ))}
    </div>
  )

}

export default ProductReviews;