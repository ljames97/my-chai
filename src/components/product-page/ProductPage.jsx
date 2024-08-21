// ProductPage.jsx

import AddToCart from "./AddToCart";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./product-reviews/ProductReviews";
import ProductHeader from "./product-header/ProductHeader";
import styles from './ProductPage.module.scss';
import { getProductReviews } from "../global/globalUtils";
import { useParams } from 'react-router-dom';
import { products } from "../data";


const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  console.log(product)

  const productReviews = getProductReviews(product);

  return (
    <div className={styles['product-page']}>
      <ProductHeader product={product} />
      <AddToCart product={product} />
      <ProductDescription description={product.description} />
      <ProductReviews reviews={productReviews}/>
    </div>
  )
}

export default ProductPage;