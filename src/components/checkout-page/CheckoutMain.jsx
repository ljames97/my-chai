import { useContext } from "react";
import styles from './checkoutPage.module.scss';
import CartContext from "../../store/CartContext";
import CheckoutItem from "./CheckoutItem";
import { getTotalCartPrice } from "../global/globalUtils";
import { useNavigate } from 'react-router-dom';
import { contactUsCover } from "../../assets/images";
import { useTheme } from "../../store/ThemeContext";
import useForm from "../../hooks/useForm";

const CheckoutMain = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { cart } = useContext(CartContext);
  const totalPrice = getTotalCartPrice();

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

  const handleContinueShopping = () => {
    navigate(`/home`);
  }

  const submitForm = () => {
    console.log(isError, formData);
  }

  return (
    <div>
      <div className="image-container">
        <img src={contactUsCover}/>
      </div>
      <div className={styles['order-summary']}>
      <button onClick={handleContinueShopping} id={styles['continue-shopping']}>Continue Shopping</button>
          <h3>Order Summary</h3>
          {cart.map((product, index) => (
            <CheckoutItem key={index} product={product} />
          ))}
        </div>
        {isError && <p className={styles['error']}>Please fill out all fields</p>}
        <form className={`${styles['checkout-form']} ${isDarkMode ? styles['dark'] : ''}`} onSubmit={(e) => handleSubmit(e, submitForm)}>
          <h3>Email</h3>
          <input 
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`${isDarkMode ? styles['dark'] : ''}`}
          />

          <h3>Shipping</h3>
          <input
            type="text"
            id="shippingAddress.name"
            value={formData.shippingAddress.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={`${isDarkMode ? styles['dark'] : ''}`}
          />
          
          <input
            type="text"
            id="shippingAddress.houseNumber"
            value={formData.shippingAddress.houseNumber}
            onChange={handleChange}
            placeholder="House Number"
            className={`${isDarkMode ? styles['dark'] : ''}`}
          />

          <input
            type="text"
            id="shippingAddress.street"
            value={formData.shippingAddress.street}
            onChange={handleChange}
            placeholder="Street"
            className={`${isDarkMode ? styles['dark'] : ''}`}
          />

          <input
            type="text"
            id="shippingAddress.city"
            value={formData.shippingAddress.city}
            onChange={handleChange}
            placeholder="City"
            className={`${isDarkMode ? styles['dark'] : ''}`}
          />

          <input
            type="text"
            id="shippingAddress.postalCode"
            value={formData.shippingAddress.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className={`${isDarkMode ? styles['dark'] : ''}`}
          />

          <input
            type="text"
            id="shippingAddress.country"
            value={formData.shippingAddress.country}
            onChange={handleChange}
            placeholder="Country"
            className={`${isDarkMode ? styles['dark'] : ''}`}
          />

          <button className="btn-primary" id={styles['pay-btn']} type="submit">
            Pay Now {`£${totalPrice}`}
          </button>
        </form>
    </div>
  );
};

export default CheckoutMain;
