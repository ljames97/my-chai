// CheckoutHeader.jsx

import MainLogo from '../layout/MainLogo';
import styles from './checkoutPage.module.scss';

const CheckoutHeader = () => {
  return (
    <div className={styles['checkout-header']}>
      <MainLogo className='checkout-logo' />
  </div>
  )
}

export default CheckoutHeader;