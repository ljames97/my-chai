// AddToCart.jsx

import { useContext, useState } from "react";
import styles from './ProductPage.module.scss';
import CartContext from "../../store/CartContext";

/**
 * `AddToCart` component for managing product configuration and adding items to the cart.
 * @param {Object} props
 * @param {Object} props.product - Product details such as `id`, `title`, `price`, `image`, and `path`.
 * @param {string} props.price - Current price of the selected product weight.
 * @param {Function} props.setPrice - Function to update the price when the weight changes.
 * @returns JSX.Element
 */
const AddToCart = ({ product, price, setPrice }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState('1');
  const [weight, setWeight] = useState('50g');
  const hasMultipleWeights = typeof product.price === 'object';


  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    setPrice(product.price[`${event.target.value}`])
  }

  const addToCartHandler = () => {
    const cartProduct = {
      id: Date.now(),
      originalId: product.id,
      title: product.title,
      weight: hasMultipleWeights ? weight : null,
      quantity: quantity,
      price: price, 
      image: product.image,
      path: product.path
    }
    addToCart(cartProduct);
  }

  return (
    <div className={styles['add-to-cart-section']}>
      {hasMultipleWeights && (
        <>
          <label htmlFor="weight">Weight:</label>
          <select id="weight" name="weight" onChange={handleWeightChange}>
            <option value="50g">50g</option>
            <option value="100g">100g</option>
            <option value="250g">250g</option>
          </select>   
        </>
      )}
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
      <button className={`${styles['add-to-cart-btn']} btn-primary`} onClick={addToCartHandler} aria-label="Add to cart">ADD TO CART</button>
    </div>
  )
}

export default AddToCart;