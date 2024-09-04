// CheckoutMain.jsx

import { useContext, useState } from "react";
import styles from './checkoutPage.module.scss';
import CartContext from "../../store/CartContext";
import CheckoutItem from "./CheckoutItem";
import { getTotalCartPrice } from "../global/globalUtils";
import { useNavigate } from 'react-router-dom';

const CheckoutMain = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const totalPrice = getTotalCartPrice();
  const [formData, setFormData] = useState({
    email: '',
    shippingAddress: {
      name: '',
      houseNumber: '',
      street: '',
      city: '',
      postalCode: '',
      country: ''
    },
    paymentInfo: ''
  });

  const handleContinueShopping = () => {
    navigate(`/home`);
  }

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id in formData.shippingAddress) {
      setFormData((prevData) => ({
        ...prevData,
        shippingAddress: {
          ...prevData.shippingAddress,
          [id]: value
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <button onClick={handleContinueShopping} id={styles['continue-shopping']}>Continue Shopping</button>
      <form className={styles['checkout-form']} onSubmit={handleSubmit}>
      <h2>Contact</h2>
        <input 
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <h2>Shipping</h2>
        <input
          type="text"
          id="name"
          value={formData.shippingAddress.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="text"
          id="houseNumber"
          value={formData.shippingAddress.houseNumber}
          onChange={handleChange}
          placeholder="House Number"
        />
        <input
          type="text"
          id="street"
          value={formData.shippingAddress.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <input
          type="text"
          id="city"
          value={formData.shippingAddress.city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          type="text"
          id="postalCode"
          value={formData.shippingAddress.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
        />
        <input
          type="text"
          id="country"
          value={formData.shippingAddress.country}
          onChange={handleChange}
          placeholder="Country"
        />

        <div className={styles['order-summary']}>
          <h2>Order Summary</h2>
          {cart.map((product, index) => (
            <CheckoutItem key={index} product={product} />
          ))}
        </div>


        <button className="btn-primary" id={styles['pay-btn']} type="submit">Pay Now {`£${totalPrice}`}</button>
      </form>
    </div>
  );
}

export default CheckoutMain;
