import { useContext, useEffect, useState, useRef } from 'react';
import CartContext from '../../store/CartContext';
import CheckoutItem from './CheckoutItem';
import styles from './checkoutPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { saveOrderToFirestore } from '../../firebase/cartService';

const OrderConfirmation = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const isOrderSavedRef = useRef(false);

  useEffect(() => {
    if (cart.length !== 0 && !isOrderSavedRef.current) {
      setCartItems(cart);
      localStorage.setItem('orderCartItems', JSON.stringify(cart));

      saveOrderToFirestore(cart);
      clearCart();
      isOrderSavedRef.current = true;
    } else {
      const storedCartItems = JSON.parse(localStorage.getItem('orderCartItems')) || [];
      setCartItems(storedCartItems);
    }
  }, [cart, clearCart]);

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
      <button onClick={handleHomeClick} className='btn-primary'>Back to home</button>
    </div>
  );
};

export default OrderConfirmation;
