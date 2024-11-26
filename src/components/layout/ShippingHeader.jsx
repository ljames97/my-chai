// ShippingHeader.jsx

import { useTheme } from '../../store/ThemeContext';
import styles from './layout.module.scss'

/**
 * Displays a promotional message about free shipping.
 *
 * @component
 * @returns {JSX.Element} The rendered ShippingHeader component.
 */
const ShippingHeader = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  }
  return (
    <div id={styles['shipping-header']}>
      <button onClick={handleClick} id={styles['theme-switch-btn']}>{isDarkMode ? 'Light mode' : 'Dark mode'}</button>
      <p className={styles['shipping-info']}>FREE SHIPPING ON ORDERS OVER £15</p>
    </div>
  )
}

export default ShippingHeader;