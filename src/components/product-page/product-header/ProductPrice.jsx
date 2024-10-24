// ProductPrice.jsx

import { useTheme } from '../../../store/ThemeContext';
import styles from '../ProductPage.module.scss';

const ProductPrice = ({ price }) => {
  const { isDarkMode } = useTheme();
  return (
    <p className={`${styles['product-price']} ${isDarkMode ? styles['dark']: ''}`}>{price}</p>
  );
}

export default ProductPrice;