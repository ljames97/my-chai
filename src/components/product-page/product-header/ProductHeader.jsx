// ProductHeader.jsx

import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

const ProductHeader = ({ product }) => {

  return (
    <div className="product-header">
      <ProductImage image={product.image}/>
      <ProductTitle title={product.title}/>
      <ProductPrice price={product.price}/>
    </div>
  )
}

export default ProductHeader;