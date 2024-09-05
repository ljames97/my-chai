// CheckoutPage.jsx

import CheckoutHeader from "./CheckoutHeader";
import CheckoutMain from "./CheckoutMain";
import styles from './checkoutPage.module.scss';

const CheckoutPage = () => {
  return (
    <div className={styles['checkout-page']}>
      <CheckoutHeader />
      <CheckoutMain />
    </div>
  );
}

export default CheckoutPage;