// ProductImage.jsx

import styles from '../ProductPage.module.scss';

/**
 * Renders a product image inside a styled container.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.image - The URL of the product image.
 * @returns {JSX.Element} Rendered ProductImage component.
 */
const ProductImage = ({ image }) => {

  return (
    <div className={styles['product-image-container']}>
      <img src={image} alt="product image" />
    </div>
  )
}

export default ProductImage;