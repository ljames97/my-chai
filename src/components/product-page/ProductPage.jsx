// ProductPage.jsx

import AddToCart from "./AddToCart";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./product-reviews/ProductReviews";
import ProductHeader from "./product-header/ProductHeader";
import styles from './ProductPage.module.scss';

const ProductPage = ({ product }) => {

  return (
    <div className={styles['product-page']}>
      <ProductHeader product={product} />
      <AddToCart product={product} />
      <ProductDescription description={product.description} />
      <ProductReviews product={product}/>
    </div>
  )
}

export default ProductPage;