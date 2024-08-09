// ProductPage.jsx

import AddToCart from "./AddToCart";
import ProductDescription from "./ProductDescription";
import ProductHeader from "./product-header/ProductHeader";

const ProductPage = ({ product }) => {

  return (
    <div>
      <ProductHeader product={product} />
      <AddToCart product={product} />
      <ProductDescription description={product.description} />
    </div>
  )
}

export default ProductPage;