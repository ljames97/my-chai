// OrderWidget.jsx 

import { useNavigate } from 'react-router-dom';
import ThemeContext, { useTheme } from '../../../store/ThemeContext';
import styles from './orderHistory.module.scss';

const OrderWidget = ({ order }) => {
  const { isDarkMode } = useTheme(ThemeContext);
  const navigate = useNavigate();

  const totalPrice = order.items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('£', ''));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const roundedTotalPrice = `£${Math.round(totalPrice * 100) / 100}`;
  
  const orderDate = order.createdAt 
  ? new Date(order.createdAt.seconds * 1000).toLocaleDateString()
  : 'Date unavailable';
  
  const extraItems = order.items.length - 1;

  const handleOrderClick = () => {
    navigate('/order-page', { state: { order, roundedTotalPrice, orderDate } });
  };

  return (
    <div className={`${styles['order-widget']} ${isDarkMode ? styles['dark'] : ''}`} onClick={handleOrderClick}>
      <div className={styles['cover-photo-container']}>
        <img src={order.items[0].image}/>
        <p className={styles['extra-items']}>{extraItems === 0 ? '' : `+ ${extraItems} items`}</p>
      </div>
      <div className={styles['order-info']}>
        <p className={styles['order-number']}>{`#${order.orderNumber}`}</p>
        <p className={styles['order-date']}>{orderDate}</p>
        <p className={styles['total-price']}>{roundedTotalPrice}</p>
      </div>
    </div>
  )
}

export default OrderWidget;