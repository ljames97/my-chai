// CheckoutHeader.jsx

import { useTheme } from '../../store/ThemeContext';
import MainLogo from '../layout/MainLogo';
import styles from './checkoutPage.module.scss';

/**
 * Displays header for the checkout page.
 * Includes the main logo and adjusts styling based on current theme (light or dark mode).
 *
 * @component
 * @returns {JSX.Element} CheckoutHeader component
 */
const CheckoutHeader = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${styles['checkout-header']} ${isDarkMode ? styles['dark'] : ''}`}>
      <MainLogo className='checkout-logo' />
  </div>
  )
}

export default CheckoutHeader;