// CheckoutItem.jsx

import { useNavigate } from 'react-router-dom';
import styles from './checkoutPage.module.scss';

/**
 * Displays a product's details in the checkout page, including image, title, weight, price, and quantity.
 * Clicking on the item navigates to the product's detail page.
 *
 * @component
 * @param {Object} props - product
 * @returns {JSX.Element} CheckoutItem component
 */
const CheckoutItem = ({ product }) => {
  const navigate = useNavigate();
  const price = parseFloat(product.price.replace('£', '') * product.quantity);

  /**
   * Navigates to the product detail page on click
   */
  const handleClick = () => {
    navigate(`/product/${product.path}`);
  }

  return (
    <div onClick={handleClick} className={styles['checkout-item']}>
      <div className={styles['checkout-image-container']}>
        <img src={product.image} alt=""/>
      </div>
      <div className={styles['checkout-item-description']}>
      <p className={styles['checkout-item-title']}>{product.title}</p>
      <p className={styles['cart-item-weight']}>{product.weight}</p>
      </div>
      <p className={styles['checkout-item-price']}>{`£${price.toFixed(2)}`}</p>
      <div className={styles['quantity-count']}>{product.quantity}</div>
    </div>
  );
}

export default CheckoutItem;