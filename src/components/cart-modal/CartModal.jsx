// CartModal.jsx

import { useContext } from "react"
import CartContext from "../../store/CartContext"
import CartItem from "./CartItem";
import styles from './cartModal.module.scss';
import { useNavigate } from 'react-router-dom';
import { getTotalCartPrice } from "../global/globalUtils";
import { useTheme } from "../../store/ThemeContext";

const CartModal = ({ toggleCartModal }) => {
  const { cart } = useContext(CartContext);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const totalPrice = getTotalCartPrice();

  const handleCheckoutClick = () => {
    if (cart.length !== 0) {
      navigate(`/checkout`);
      toggleCartModal();
    }
  }

  return (
    <div id={styles['cart-modal']} className='modal'>
      <div className={`${styles['cart-modal-header']} ${isDarkMode ? styles['dark'] : ''}`}>
        <p>CART</p>
        <button id={styles['cart-modal-exit-btn']} className={`${isDarkMode ? 'dark' : ''} exit-modal-btn`} onClick={toggleCartModal}>X</button>
      </div>
      {cart.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
      <p className={styles['cart-message']}>Shipping calculated at checkout</p>
      <button onClick={handleCheckoutClick} className={`${styles['checkout-btn']} btn-primary ${isDarkMode ? styles['dark']: ''}`}>CHECKOUT {`£${totalPrice}`}</button>
    </div>
  )
}

export default CartModal;