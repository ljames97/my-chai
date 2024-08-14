// ProductPrice.jsx

import styles from '../ProductPage.module.scss';

const ProductPrice = ({ price }) => {
  return (
    <p className={styles['product-price']}>{price}</p>
  );
}

export default ProductPrice;