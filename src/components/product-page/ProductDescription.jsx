// ProductDescription.jsx

import { useTheme } from '../../store/ThemeContext';
import styles from './ProductPage.module.scss';

/**
 * Displays product descriptinos
 * @param {Object} props
 * @param {string} props.description - product description
 * @returns {JSX.Element} A paragraph with the product description.
 */
const ProductDescription = ({ description }) => {
  const { isDarkMode } = useTheme();
  return (
    <p className={`${styles['product-description']} ${isDarkMode ? styles['dark'] : ''}`}>{description}</p>
  )
}

export default ProductDescription;