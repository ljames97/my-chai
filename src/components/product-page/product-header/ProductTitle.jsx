// ProductTitle.jsx

import styles from '../ProductPage.module.scss';

/**
 * Renders the product title.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - produce title.
 * @returns {JSX.Element} Rendered ProductTitle component.
 */
const ProductTitle = ({ title }) => {
  return (
    <h2 className={styles['product-title']}>{title}</h2>
  );
}

export default ProductTitle;