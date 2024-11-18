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
import { useState } from "react";


/**
 * Renders Product Page with details and actions for a single product.
 * @returns {JSX.Element} Product page.
 */
const ProductPage = () => {
  const { path } = useParams();
  const product = products.find(product => product.path === path);
  const [price, setPrice] = useState(product.price['50g']);

  const productReviews = getProductReviews(product);

  return (
    <div className={styles['product-page']}>
      <ProductNavigation product={product}/>
      <ProductHeader product={product} price={price} />
      <AddToCart product={product} price={price} setPrice={setPrice} />
      <ProductDescription description={product.description} />
      <ProductReviews reviews={productReviews} product={product}/>
    </div>
  )
}

export default ProductPage;