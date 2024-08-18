// CartModal.jsx

import { useContext } from "react"
import CartContext from "../../store/CartContext"
import CartItem from "./CartItem";
import styles from './cartModal.module.scss';

const CartModal = ({ toggleCartModal }) => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.price;

  return (
    <div className={styles['cart-modal']}>
      <div className={styles['cart-modal-header']}>
        <p>CART</p>
        <button id={styles['exit-cart-modal-btn']} onClick={toggleCartModal}>X</button>
      </div>
      {cart.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
      <p className={styles['cart-message']}>Shipping calculated at checkout</p>
      <button className={`${styles['checkout-btn']} btn-primary`}>CHECKOUT {totalPrice}</button>
    </div>
  )
}

export default CartModal;