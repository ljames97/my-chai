// CartItem.jsx

import { useContext } from 'react';
import styles from './cartModal.module.scss';
import CartContext from '../../store/CartContext';
import { useTheme } from '../../store/ThemeContext';

const CartItem = ({ product }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  const { isDarkMode } = useTheme();
  console.log(product);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    updateQuantity(product, newQuantity);
  }

  const handleRemoveItem = () => {
    removeFromCart(product);
  }

  return (
    <div className={`${styles['cart-item']} ${isDarkMode ? styles['dark']: ''}`}>
      <div className={styles['cart-image-container']}>
        <img src={product.image} alt=""/>
      </div>
      <div className="cart-item-information">
        <p className={styles['cart-item-title']}>{product.title}</p>
        <p className={styles['cart-item-weight']}>{product.weight}</p>
        <p className={styles['cart-item-price']}>{product.price}</p>
        <input 
        className={`${styles['cart-item-quantity']} ${isDarkMode ? styles['dark']: ''}`}
        value={product.quantity}
        onChange={handleQuantityChange}/>
      </div>
      <button onClick={handleRemoveItem} id={styles['remove-from-cart-btn']}>Remove</button>
    </div>
  );
}

export default CartItem;