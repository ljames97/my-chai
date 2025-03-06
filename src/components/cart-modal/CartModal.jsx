// CartModal.jsx

import ReactDOM from "react-dom";
import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/CartContext"
import CartItem from "./CartItem";
import styles from './cartModal.module.scss';
import { useNavigate } from 'react-router-dom';
import { getTotalCartPrice } from "../global/globalUtils";
import { useTheme } from "../../store/ThemeContext";
import { getNextOrderNumber } from "../../firebase/cartService";
import { auth } from "../../firebase/firebaseConfig";
import { loadStripe } from "@stripe/stripe-js";

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
  const totalPrice = getTotalCartPrice();

  const [isOpen, setIsOpen] = useState(false);

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsOpen(false); 
    setTimeout(() => toggleCartModal(), 200);
  };

  useEffect(() => {
    setIsOpen(true);
          console.log(cart)
    return () => setIsOpen(false);
  }, []);

  /**
   * Navigates to the checkout page and closes the cart modal if the cart is not empty.
   */
  const handleCheckoutClick = async () => {
    if (cart.length !== 0) {
      toggleCartModal();

      
      const formattedCart = cart.map(product => ({
        ...product,
        price: Number(product.price.replace("£", "")),
      }));

      const stripe = await stripePromise;
  
      const response = await fetch("https://my-chai-server-production.up.railway.app/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: formattedCart }),
      });

      const data = await response.json();
      console.log("Stripe Session Response:", data);
  
      const { id } = data;
  
      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) console.error("Stripe Checkout Error:", error);
    }
  };
  

  return ReactDOM.createPortal (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div id={styles['cart-modal']} className={`modal ${isOpen ? 'open' : 'close'}`}>
        <div className={`${styles['cart-modal-header']} ${isDarkMode ? styles['dark'] : ''}`}>
          <p>CART</p>
          <button id={styles['cart-modal-exit-btn']} className={`${isDarkMode ? 'dark' : ''} exit-modal-btn`} onClick={closeModal} aria-label="Close cart modal">X</button>
        </div>
        {cart.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
        <p className={styles['cart-message']}>Shipping calculated at checkout</p>
        <button onClick={handleCheckoutClick} className={`${styles['checkout-btn']} btn-primary ${isDarkMode ? styles['dark']: ''}`} aria-label={`Proceed to checkout. Total price: £${totalPrice}`}>CHECKOUT {`£${totalPrice}`}</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  )
}

export default CartModal;