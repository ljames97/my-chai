// ProductPrice.jsx

import { useTheme } from '../../../store/ThemeContext';
import styles from '../ProductPage.module.scss';

/**
 * Renders product price with styling that adapts to the current theme.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.price - The price of the product, typically prefixed with a currency symbol.
 * @returns {JSX.Element} Rendered ProductPrice component.
 */
const ProductPrice = ({ price }) => {
  const { isDarkMode } = useTheme();
  return (
    <p className={`${styles['product-price']} ${isDarkMode ? styles['dark']: ''}`}>{price}</p>
  );
}

export default ProductPrice;