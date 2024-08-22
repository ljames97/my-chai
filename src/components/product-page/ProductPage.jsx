// ProductPage.jsx

import AddToCart from "./AddToCart";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./product-reviews/ProductReviews";
import ProductHeader from "./product-header/ProductHeader";
import styles from './ProductPage.module.scss';
import { getProductReviews } from "../global/globalUtils";
import { useParams } from 'react-router-dom';
import { products } from "../data";
import ProductNavigation from "./ProductNavigation";


const ProductPage = () => {
  const { path } = useParams();
  const product = products.find(product => product.path === path);

  const productReviews = getProductReviews(product);

  return (
    <div className={styles['product-page']}>
      <ProductNavigation product={product}/>
      <ProductHeader product={product} />
      <AddToCart product={product} />
      <ProductDescription description={product.description} />
      <ProductReviews reviews={productReviews}/>
    </div>
  )
}

export default ProductPage;