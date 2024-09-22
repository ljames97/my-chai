import { useContext, useState } from "react";
import styles from './checkoutPage.module.scss';
import CartContext from "../../store/CartContext";
import CheckoutItem from "./CheckoutItem";
import { getTotalCartPrice } from "../global/globalUtils";
import { useNavigate } from 'react-router-dom';
import { contactUsCover } from "../../assets/images";

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

  const [errors, setErrors] = useState({});

  const handleContinueShopping = () => {
    navigate(`/home`);
  }

  const validateField = (id, value) => {
    switch (id) {
      case 'email':
        if (!value || !/\S+@\S+\.\S+/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'name':
      case 'houseNumber':
      case 'street':
      case 'city':
      case 'postalCode':
      case 'country':
        break;
      default:
        return '';
    }
    return '';
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    const errorMessage = validateField(id, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: errorMessage
    }));

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

    let isValid = true;
    const newErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    Object.keys(formData.shippingAddress).forEach((field) => {
      if (!formData.shippingAddress[field]) {
        isValid = false;
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log('Form is valid, submitting:', formData, cart);
    } else {
      console.log('Form is invalid, please correct the errors');
    }
  };

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
      <form className={styles['checkout-form']} onSubmit={handleSubmit}>
        <h3>Email</h3>
        <input 
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={errors.email ? styles['input-error'] : ''}
        />
        {errors.email && <p className={styles['error']}>{errors.email}</p>}

        <h3>Shipping</h3>
        <input
          type="text"
          id="name"
          value={formData.shippingAddress.name}
          onChange={handleChange}
          placeholder="Full Name"
          className={errors.name ? styles['input-error'] : ''}
        />
        {errors.name && <p className={styles['error']}>{errors.name}</p>}
        
        <input
          type="text"
          id="houseNumber"
          value={formData.shippingAddress.houseNumber}
          onChange={handleChange}
          placeholder="House Number"
          className={errors.houseNumber ? styles['input-error'] : ''}
        />
        {errors.houseNumber && <p className={styles['error']}>{errors.houseNumber}</p>}

        <input
          type="text"
          id="street"
          value={formData.shippingAddress.street}
          onChange={handleChange}
          placeholder="Street"
          className={errors.street ? styles['input-error'] : ''}
        />
        {errors.street && <p className={styles['error']}>{errors.street}</p>}

        <input
          type="text"
          id="city"
          value={formData.shippingAddress.city}
          onChange={handleChange}
          placeholder="City"
          className={errors.city ? styles['input-error'] : ''}
        />
        {errors.city && <p className={styles['error']}>{errors.city}</p>}

        <input
          type="text"
          id="postalCode"
          value={formData.shippingAddress.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          className={errors.postalCode ? styles['input-error'] : ''}
        />
        {errors.postalCode && <p className={styles['error']}>{errors.postalCode}</p>}

        <input
          type="text"
          id="country"
          value={formData.shippingAddress.country}
          onChange={handleChange}
          placeholder="Country"
          className={errors.country ? styles['input-error'] : ''}
        />
        {errors.country && <p className={styles['error']}>{errors.country}</p>}



        <button className="btn-primary" id={styles['pay-btn']} type="submit">
          Pay Now {`£${totalPrice}`}
        </button>
      </form>
    </div>
  );
};

export default CheckoutMain;
