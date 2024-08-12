// ProductPage.jsx

import AddToCart from "./AddToCart";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import ProductHeader from "./product-header/ProductHeader";

const ProductPage = ({ product }) => {

  return (
    <div className="product-page">
      <ProductHeader product={product} />
      <AddToCart product={product} />
      <ProductDescription description={product.description} />
      <ProductReviews product={product}/>
    </div>
  )
}

export default ProductPage;