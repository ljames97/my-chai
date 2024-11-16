// ProductDescription.jsx

import styles from './ProductPage.module.scss';

/**
 * Displays product descriptinos
 * @param {Object} props
 * @param {string} props.description - product description
 * @returns {JSX.Element} A paragraph with the product description.
 */
const ProductDescription = ({ description }) => {
  return (
    <p className={styles['product-decription']}>{description}</p>
  )
}

export default ProductDescription;