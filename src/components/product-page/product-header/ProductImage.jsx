// ProductImage.jsx

const ProductImage = ({ image }) => {

  return (
    <div className="product-image-container">
      <img src={image} alt="product image" />
    </div>
  )
}

export default ProductImage;