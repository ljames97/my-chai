// AddToCart.jsx

import { useState } from "react";

const AddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const addToCartHandler = () => {
    console.log(`ProductId: ${product.id}, ProductName: ${product.title},  Weight: ${document.getElementById('weight').value}, Quantity: ${quantity}`);

  }

  return (
    <div className="add-to-cart-section">
      <label htmlFor="weight">Weight:</label>
      <select id="weight" name="weight">
        <option value="50g">50g</option>
        <option value="100g">100g</option>
        <option value="250g">250g</option>
      </select>      
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="10"
        step="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button className="add-to-cart" onClick={addToCartHandler}>ADD TO CART</button>
    </div>
  )
}

export default AddToCart;