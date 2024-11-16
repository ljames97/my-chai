// ShippingHeader.jsx

import styles from './layout.module.scss'

/**
 * Displays a promotional message about free shipping.
 *
 * @component
 * @returns {JSX.Element} The rendered ShippingHeader component.
 */
const ShippingHeader = () => {
  return (
    <div id={styles['shipping-header']}>FREE SHIPPING ON ORDERS OVER £15</div>
  )
}

export default ShippingHeader;