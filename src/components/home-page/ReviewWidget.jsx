// ReviewWidget.jsx

import { useTheme } from "../../store/ThemeContext";
import { products } from "../data";
import StarRating from "../product-page/product-reviews/StarRating";
import styles from './homePage.module.scss';
import { useNavigate } from 'react-router-dom';

/**
 * Displays a single review with its associated product.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.review - The review object containing review details.
 * @returns {JSX.Element} A widget displaying the review information.
 */
const ReviewWidget = ({ review }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const product = products.find(product => product.id === review.productId);
  
  const handleProductClick = () => {
    navigate(`/product/${product.path}`);
  }
  return (
    <div className={`${styles['review-widget']} ${isDarkMode ? styles['dark'] : ''}`}>
      <StarRating rating={review.rating}/>
      <p className={styles['review-title']}>{review.title}</p>
      <p className={styles['review-description']}>{review.description}</p>
      <p onClick={handleProductClick} className={styles['product-title']}>{product.title}</p>
      <p>{review.date}</p>
    </div>
  );
}

export default ReviewWidget;