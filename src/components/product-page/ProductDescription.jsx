// ProductDescription.jsx

import styles from './ProductPage.module.scss';

const ProductDescription = ({ description }) => {
  return (
    <p className={styles['product-decription']}>{description}</p>
  )
}

export default ProductDescription;