// CollectionGridItem.jsx

import { useTheme } from "../../store/ThemeContext";
import { calculateAverageRating, getProductReviews } from "../global/globalUtils";
import StarRating from "../product-page/product-reviews/StarRating";
import ProductImageTitle from "./ProductImageTitle";
import styles from './collectionPage.module.scss';
import { useNavigate } from 'react-router-dom';


const CollectionGridItem = ({ product, toggleMobileMenu }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const productReviews = getProductReviews(product);
  const productRating = calculateAverageRating(productReviews);

  const handleClick = () => {
    navigate(`/product/${product.path}`);
    if (toggleMobileMenu) {
      toggleMobileMenu();
    }
  }

  return (
    <div onClick={handleClick} className={`${styles['collection-grid-item']} ${isDarkMode ? styles['dark'] : ''}`}>
      <ProductImageTitle product={product} />
      <div className={styles['product-reviews']}>
        <StarRating rating={productRating}/>
        <div className={`${styles['number-of-reviews']} ${isDarkMode ? styles['dark'] : ''}`}>{`(${productReviews.length})`}</div>
      </div>

      <p className={`${styles['grid-item-price']} ${isDarkMode ? styles['dark'] : ''}`}>{`from ${product.price['50g']}`}</p>
    </div>
  )
}

export default CollectionGridItem;