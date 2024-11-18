import { useContext, useEffect, useState, useRef } from 'react';
import CartContext from '../../store/CartContext';
import CheckoutItem from './CheckoutItem';
import styles from './checkoutPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { saveOrderToFirestore } from '../../firebase/cartService';

/**
 * Displays a confirmation page after user has placed an order.
 * Saves the order to Firestore and clears the cart. If the user reloads the page, it retrieves the
 * order data from local storage to persist order information.
 *
 * @component
 * @returns {JSX.Element} Confirmation page showing ordered items and button to return to home page.
 */
const OrderConfirmation = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const isOrderSavedRef = useRef(false);

  useEffect(() => {
    /**
     * Effect to handle saving order details and clearing the cart.
     * If this is the first render after placing an order, it saves the cart to Firestore,
     * updates localStorage, and clears the cart in context.
     * On subsequent renders (like page reloads), it retrieves the order details from localStorage.
     */
    if (cart.length !== 0 && !isOrderSavedRef.current) {
      // Save order to Firestore and set it in local storage
      setCartItems(cart);
      localStorage.setItem('orderCartItems', JSON.stringify(cart));
      saveOrderToFirestore(cart);

      // Clear the cart and mark the order as saved
      clearCart();
      isOrderSavedRef.current = true;
    } else {
      // Retrieve saved order items from localStorage if available
      const storedCartItems = JSON.parse(localStorage.getItem('orderCartItems')) || [];
      setCartItems(storedCartItems);
    }
  }, [cart, clearCart]);

  /**
   * Navigates the user back to the home page.
   */
  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <div className={styles['order-confirmation']}>
      <h3>Thank you for your order!</h3>
      <p>Thank you for shopping with MyChai, we'll let you know when your order has been dispatched.</p>
      {cartItems.map((product, index) => (
        <CheckoutItem key={index} product={product} />
      ))}
      <button onClick={handleHomeClick} className='btn-primary' aria-label='Back to home'>Back to home</button>
    </div>
  );
};

export default OrderConfirmation;
