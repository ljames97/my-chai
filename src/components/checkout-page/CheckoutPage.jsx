// CheckoutPage.jsx

import { useTheme } from "../../store/ThemeContext";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutMain from "./CheckoutMain";
import styles from './checkoutPage.module.scss';

const CheckoutPage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${styles['checkout-page']} ${isDarkMode ? styles['dark']: ''}`}>
      <CheckoutHeader />
      <CheckoutMain />
    </div>
  );
}

export default CheckoutPage;