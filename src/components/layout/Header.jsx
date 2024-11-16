// Header.jsx

import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import styles from './layout.module.scss';
import MainLogo from "./MainLogo";
import { useTheme } from "../../store/ThemeContext";

/**
 * Header component for the application, containing the menu toggle, logo, and cart icon.
 *
 * @component
 * @param {Function} toggleCartModal - Function to toggle the cart modal visibility.
 * @param {Function} toggleMobileMenu - Function to toggle the mobile menu visibility.
 * @param {boolean} isHomePage - Determines if the header is displayed on the home page.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = ({ toggleCartModal, toggleMobileMenu, isHomePage }) => {
  const { cart } = useContext(CartContext);
  const { isDarkMode } = useTheme();
  const [cartCount, setCartCount] = useState(0);
  const fill = isHomePage || isDarkMode ? '#fcfaf7' : '#000'

  useEffect(() => {
    const count = cart.length;
    setCartCount(count);
  }, [cart]);

  return (
    <>    
      <header className={isHomePage ? 'transparent-background': ''}>
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['menu-icon']}>
            <rect x="3" y="6" width="18" height="2" fill={fill} />
            <rect x="3" y="11" width="18" height="2" fill={fill} />
            <rect x="3" y="16" width="18" height="2" fill={fill} />
          </svg>
        </div>
        <MainLogo isHomePage={isHomePage}/>
        <div className={styles['cart-icon']} onClick={toggleCartModal}>
          {cartCount > 0 && <div className={styles['cart-badge']} id={isHomePage || isDarkMode ? styles['cart-badge-light'] : styles['cart-badge-dark']}></div>}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M5.058 23a2 2 0 104.001-.001A2 2 0 005.058 23zm12.079 0c0 1.104.896 2 2 2s1.942-.896 1.942-2-.838-2-1.942-2-2 .896-2 2zM0 1a1 1 0 001 1h1.078l.894 3.341L5.058 13c0 .072.034.134.042.204l-1.018 4.58A.997.997 0 005.058 19h16.71a1 1 0 000-2H6.306l.458-2.061c.1.017.19.061.294.061h12.31c1.104 0 1.712-.218 2.244-1.5l3.248-6.964C25.423 4.75 24.186 4 23.079 4H5.058c-.157 0-.292.054-.438.088L3.844.772A1 1 0 002.87 0H1a1 1 0 00-1 1zm5.098 5H22.93l-3.192 6.798c-.038.086-.07.147-.094.19-.067.006-.113.012-.277.012H7.058v-.198l-.038-.195L5.098 6z" fill={fill}/> {/* Changed fill to white */}
          </svg>        
        </div>
      </header>
    </>
  );
}

export default Header;