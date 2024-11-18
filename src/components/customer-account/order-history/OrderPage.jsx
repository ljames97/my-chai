// OrderPage.jsx

import { useLocation } from "react-router-dom";
import CheckoutItem from "../../checkout-page/CheckoutItem";
import styles from './orderHistory.module.scss';
import ThemeContext, { useTheme } from "../../../store/ThemeContext";
import { useContext } from "react";

/**
 * Displays a detailed view of a single order, including
 * the order number, date, total price, and a list of items in the order.
 *
 * @component
 * @returns {JSX.Element} The OrderPage component.
 */
const OrderPage = () => {
  const location = useLocation();
  const { order, roundedTotalPrice, orderDate } = location.state || {};
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={styles['order-page']}>
      <div className={`${styles['order-header']} ${isDarkMode ? styles['dark'] : ''}`}>
        <h3>{`#${order.orderNumber}`}</h3>
        <p className={styles['order-date']}>{orderDate}</p>
        <p className={styles['total-price']}>{roundedTotalPrice}</p>
      </div>

      {order.items.map((product, index) => (
        <CheckoutItem key={index} product={product} />
      ))}
    </div>
  );
}

export default OrderPage;