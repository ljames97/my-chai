// CartModal.jsx

import { useContext } from "react"
import CartContext from "../../store/CartContext"
import CartItem from "./CartItem";
import styles from './cartModal.module.scss';
import { useNavigate } from 'react-router-dom';
import { getTotalCartPrice } from "../global/globalUtils";
import { useTheme } from "../../store/ThemeContext";

/**
 * Displays a modal containing a summary of items in the shopping cart.
 * It allows users to view each cart item, see the total price, and proceed to checkout.
 *
 * @component
 * @param {Object} props - toggleCartModal useState function
 * @returns {JSX.Element} CartModal component
 */
const CartModal = ({ toggleCartModal }) => {
  const { cart } = useContext(CartContext);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const totalPrice = getTotalCartPrice();

  /**
   * Navigates to the checkout page and closes the cart modal if the cart is not empty.
   */
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
        <button id={styles['cart-modal-exit-btn']} className={`${isDarkMode ? 'dark' : ''} exit-modal-btn`} onClick={toggleCartModal} aria-label="Close cart modal">X</button>
      </div>
      {cart.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
      <p className={styles['cart-message']}>Shipping calculated at checkout</p>
      <button onClick={handleCheckoutClick} className={`${styles['checkout-btn']} btn-primary ${isDarkMode ? styles['dark']: ''}`} aria-label={`Proceed to checkout. Total price: £${totalPrice}`}>CHECKOUT {`£${totalPrice}`}</button>
    </div>
  )
}

export default CartModal;