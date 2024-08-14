// ProductTitle.jsx

import styles from '../ProductPage.module.scss';

const ProductTitle = ({ title }) => {
  return (
    <h2 className={styles['product-title']}>{title}</h2>
  );
}

export default ProductTitle;