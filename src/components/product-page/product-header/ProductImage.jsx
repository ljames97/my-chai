// ProductImage.jsx

import styles from '../ProductPage.module.scss';

const ProductImage = ({ image }) => {

  return (
    <div className={styles['product-image-container']}>
      <img src={image} alt="product image" />
    </div>
  )
}

export default ProductImage;