import { useContext } from "react";
import styles from './checkoutPage.module.scss';
import CartContext from "../../store/CartContext";
import CheckoutItem from "./CheckoutItem";
import { getTotalCartPrice } from "../global/globalUtils";
import { useNavigate } from 'react-router-dom';
import { contactUsCover } from "../../assets/images";
import { useTheme } from "../../store/ThemeContext";
import useForm from "../../hooks/useForm";
import { getNextOrderNumber } from "../../firebase/cartService";
import { auth } from "../../firebase/firebaseConfig";

/**
* Displays the checkout page, including order summary and a form for user email and shipping address input.
* Allows users to confirm their order details and submit them for processing.
*
* @component
* @returns {JSX.Element} Checkout page.
 */
const CheckoutMain = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { cart } = useContext(CartContext);
  const totalPrice = getTotalCartPrice();

  // Custom form hook to handle form data, changes, and errors
  const { formData, handleChange, handleSubmit, isError } = useForm({
    email: '',
    shippingAddress: {
      name: '',
      houseNumber: '',
      street: '',
      city: '',
      postalCode: '',
      country: ''
    }
  });

  /**
   * Handles navigation to the home page to continue shopping.
   */
  const handleContinueShopping = () => {
    navigate(`/`);
  }

  /**
   * Handles form submission, navigating to order confirmation.
   */
  const submitForm = async () => {
    navigate('/order-confirmation');

    try {
      const user = auth.currentUser;
      !user ? await getNextOrderNumber() : ''
    } catch (error) {
      throw new Error(`Error getting order number ${error.message}`);
    }
  }

  return (
    <div className={styles['checkout-main']}>
      <div className={styles['image-container']}>
        <img src={contactUsCover} alt="Contact us cover photo"/>
      </div>
      <div className={styles['checkout-content']}>
        <div className={styles['order-summary']}>
        <button onClick={handleContinueShopping} id={styles['continue-shopping']} aria-label="Continue Shopping">Continue Shopping</button>
            <h3>Order Summary</h3>
            {cart.map((product, index) => (
              <CheckoutItem key={index} product={product} />
            ))}
          </div>
          {isError && <p id="error" className={styles['error']}>Please fill out all fields</p>}
          <form className={`${styles['checkout-form']} ${isDarkMode ? styles['dark'] : ''}`} onSubmit={(e) => handleSubmit(e, submitForm)}>
            <h3>Email</h3>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${isDarkMode ? styles['dark'] : ''}`}
              aria-describedby={isError ? "error" : undefined}
              required
            />

            <h3>Shipping</h3>
            <label htmlFor="shippingAddress.name">Full Name</label>
            <input
              type="text"
              id="shippingAddress.name"
              value={formData.shippingAddress.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`${isDarkMode ? styles['dark'] : ''}`}
              aria-describedby={isError ? "error" : undefined}
              required
            />
            
            <label htmlFor="shippingAddress.houseNumber">House Number</label>
            <input
              type="text"
              id="shippingAddress.houseNumber"
              value={formData.shippingAddress.houseNumber}
              onChange={handleChange}
              placeholder="House Number"
              className={`${isDarkMode ? styles['dark'] : ''}`}
              aria-describedby={isError ? "error" : undefined}
              required
            />

            <label htmlFor="shippingAddress.street">Street</label>
            <input
              type="text"
              id="shippingAddress.street"
              value={formData.shippingAddress.street}
              onChange={handleChange}
              placeholder="Street"
              className={`${isDarkMode ? styles['dark'] : ''}`}
              aria-describedby={isError ? "error" : undefined}
              required
            />

            <label htmlFor="shippingAddress.city">City</label>
            <input
              type="text"
              id="shippingAddress.city"
              value={formData.shippingAddress.city}
              onChange={handleChange}
              placeholder="City"
              className={`${isDarkMode ? styles['dark'] : ''}`}
              aria-describedby={isError ? "error" : undefined}
              required
            />

            <label htmlFor="shippingAddress.postalCode">Postal Code</label>
            <input
              type="text"
              id="shippingAddress.postalCode"
              value={formData.shippingAddress.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className={`${isDarkMode ? styles['dark'] : ''}`}
              aria-describedby={isError ? "error" : undefined}
              required
            />

            <label htmlFor="shippingAddress.country">Country</label>
            <input
              type="text"
              id="shippingAddress.country"
              value={formData.shippingAddress.country}
              onChange={handleChange}
              placeholder="Country"
              className={`${isDarkMode ? styles['dark'] : ''}`}
              aria-describedby={isError ? "error" : undefined}
              required
            />

            <button className="btn-primary" id={styles['pay-btn']} type="submit" aria-label="Pay Now">
              Pay Now {`£${totalPrice}`}
            </button>
          </form>
      </div>
    </div>
  );
};

export default CheckoutMain;
