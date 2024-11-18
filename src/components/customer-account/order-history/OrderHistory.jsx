// OrderHistory.jsx 

import styles from './orderHistory.module.scss';

import { getOrderHistory } from "../../../firebase/cartService";
import OrderWidget from "./OrderWidget"
import { useEffect, useState } from 'react';
import ThemeContext, { useTheme } from '../../../store/ThemeContext';

/**
 * Displays the list of past orders for the logged-in user.
 * Orders are sorted by `orderNumber` in descending order, with the most recent order shown first.
 *
 * @component
 * @returns {JSX.Element} OrderHistory component.
 */
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const { isDarkMode } = useTheme(ThemeContext);

  useEffect(() => {
    /**
     * Fetches order history from Firestore, sorts it by order number in descending order,
     * and updates the `orders` state.
     */
    const getOrders = async () => {
      const orders = await getOrderHistory();
      const sortedOrders = (orders || []).sort((a, b) => b.orderNumber - a.orderNumber);
      setOrders(sortedOrders);
    }
    getOrders();
    console.log(orders)
  }, []);

  return (
    <div className={styles['order-history']}>
      <h3 className={`${styles['order-history-title']} ${isDarkMode ? styles['dark'] : ''}`}>Order History</h3>
      <div className={styles['orders']}>
        {orders.map((order, index) => (
          <OrderWidget key={index} order={order} />
        ))}
      </div>
    </div>
  )
}

export default OrderHistory;