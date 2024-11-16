// ProductImageTitle.jsx

import styles from './collectionPage.module.scss';
import { useNavigate } from 'react-router-dom';

/**
 * Displays the product's image and title.
 * On click, navigates to the product's detail page.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.product - Product details object containing image, title, and path.
 * @param {Function} [props.toggleMobileMenu] - Optional function to toggle the mobile menu.
 * @param {string} [props.className] - Optional additional CSS class to apply to the component.
 * @returns {JSX.Element} ProductImageTitle component
 */
const ProductImageTitle = ({ product, toggleMobileMenu, className = '' }) => {
  const navigate = useNavigate();

  /**
   * Navigates to the product's details page. If provided, it also toggles the mobile menu.
   */
  const handleClick = () => {
    navigate(`/product/${product.path}`);
    if (toggleMobileMenu) {
      toggleMobileMenu();
    }
  }

  return (
    <div onClick={handleClick} className={`${styles[className]} ${styles['product-image-title']}`}>
      <div className="grid-item-image-container">
        <img src={product.image} alt="" />
      </div>
      <p className="grid-item-title">{product.title}</p>
    </div>
  );
}

export default ProductImageTitle;