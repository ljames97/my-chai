// AddToCart.jsx

const AddToCart = ({ product }) => {
  const addToCartHandler = () => {
    console.log(product);
  }

  return (
    <button className="add-to-cart" onClick={addToCartHandler}>ADD TO CART</button>
  )
}

export default AddToCart;