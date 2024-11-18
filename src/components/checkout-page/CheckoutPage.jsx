// CheckoutPage.jsx

import { useTheme } from "../../store/ThemeContext";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutMain from "./CheckoutMain";
import styles from './checkoutPage.module.scss';


/**
 * Renders the full checkout experience, including a header and main checkout section.
 * Applies dark mode theme if enabled in the application's theme context.
 *
 * @component
 * @returns {JSX.Element} Checkout page with header and main section.
 */
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