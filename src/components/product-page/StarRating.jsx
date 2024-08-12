// StarRating.jsx

const StarRating = ({ rating }) => {
  return (
    <div className="rating-stars">
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