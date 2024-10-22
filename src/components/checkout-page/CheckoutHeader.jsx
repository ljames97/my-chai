// CheckoutHeader.jsx

import { useTheme } from '../../store/ThemeContext';
import MainLogo from '../layout/MainLogo';
import styles from './checkoutPage.module.scss';

const CheckoutHeader = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${styles['checkout-header']} ${isDarkMode ? styles['dark'] : ''}`}>
      <MainLogo className='checkout-logo' />
  </div>
  )
}

export default CheckoutHeader;