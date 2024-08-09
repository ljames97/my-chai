// ProductHeader.jsx

import ProductImage from "./ProductImage";

const ProductHeader = ({ product }) => {

  return (
    <div>
      <ProductImage image={product.image}/>
      {/* <ProductTitle />
      <ProductPrice /> */}
    </div>
  )
}

export default ProductHeader;