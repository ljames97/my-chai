// CollectionGridItem.jsx

import { useTheme } from "../../store/ThemeContext";
import { calculateAverageRating, getProductReviews } from "../global/globalUtils";
import StarRating from "../product-page/product-reviews/StarRating";
import ProductImageTitle from "./ProductImageTitle";
import styles from './collectionPage.module.scss';
import { useNavigate } from 'react-router-dom';

/**
 * Represents single product item within a grid.
 * Displays product's image, title, average rating, review count, and price.
 * 
 * @component
 * @param {Object} product - Product object to display.
 * @param {Function} [toggleMobileMenu] - Optional function to close the mobile menu on navigation.
 * @returns {JSX.Element} Clickable product item in the collection grid.
 */
const CollectionGridItem = ({ product, toggleMobileMenu }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const productReviews = getProductReviews(product);
  const productRating = calculateAverageRating(productReviews);

    /**
   * Determine the price to display (either from `50g` or as a single price).
   */
    const displayPrice = typeof product.price === 'object' 
    ? `from ${product.price['50g']}` 
    : `${product.price}`;

  /**
   * Navigates to the product detail page and optionally toggles the mobile menu.
   */
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

      <p className={`${styles['grid-item-price']} ${isDarkMode ? styles['dark'] : ''}`}>{displayPrice}</p>
    </div>
  )
}

export default CollectionGridItem;