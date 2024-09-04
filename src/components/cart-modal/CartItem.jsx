// CartItem.jsx

import { useContext } from 'react';
import styles from './cartModal.module.scss';
import CartContext from '../../store/CartContext';

const CartItem = ({ product }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  console.log(product);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    updateQuantity(product, newQuantity);
  }

  const handleRemoveItem = () => {
    removeFromCart(product);
  }

  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-image-container']}>
        <img src={product.image} alt=""/>
      </div>
      <div className="cart-item-information">
        <p className={styles['cart-item-title']}>{product.title}</p>
        <p className={styles['cart-item-weight']}>{product.weight}</p>
        <p className={styles['cart-item-price']}>{product.price}</p>
        <input 
        id={styles['cart-item-quantity']}
        value={product.quantity}
        onChange={handleQuantityChange}/>
      </div>
      <button onClick={handleRemoveItem} id={styles['remove-from-cart-btn']}>Remove</button>
    </div>
  );
}

export default CartItem;