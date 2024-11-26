// Header.jsx

import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import styles from './layout.module.scss';
import MainLogo from "./MainLogo";
import { useTheme } from "../../store/ThemeContext";
import DesktopMenu from "../desktop-menu/DesktopMenu";

/**
 * Header component for the application, containing the menu toggle, logo, and cart icon.
 *
 * @component
 * @param {Function} toggleCartModal - Function to toggle the cart modal visibility.
 * @param {Function} toggleMobileMenu - Function to toggle the mobile menu visibility.
 * @param {boolean} isHomePage - Determines if the header is displayed on the home page.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = ({ toggleCartModal, toggleMobileMenu, isHomePage, toggleAccountModalManager }) => {
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
      <header className={isHomePage ? 'transparent-background': 'regular-background'}>
        <div className={styles['mobile-menu']} onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['menu-icon']}>
            <rect x="3" y="6" width="18" height="2" fill={fill} />
            <rect x="3" y="11" width="18" height="2" fill={fill} />
            <rect x="3" y="16" width="18" height="2" fill={fill} />
          </svg>
        </div>
        <MainLogo isHomePage={isHomePage}/>
        <DesktopMenu isHomePage={isHomePage} />
        <div className={`${styles['profile-icon']} ${!isHomePage ? styles['dark'] : ''}`}>
          <svg onClick={toggleAccountModalManager} xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20" width="24" height="24" fill={'white'}>
            <path d="M10.713 8.771c.31.112.53.191.743.27.555.204.985.372 1.367.539 1.229.535 1.993 1.055 2.418 1.885.464.937.722 1.958.758 2.997.03.84-.662 1.538-1.524 1.538H1.525c-.862 0-1.554-.697-1.524-1.538a7.36 7.36 0 01.767-3.016c.416-.811 1.18-1.33 2.41-1.866a25.25 25.25 0 011.366-.54l.972-.35a1.42 1.42 0 00-.006-.072c-.937-1.086-1.369-2.267-1.369-4.17C4.141 1.756 5.517 0 8.003 0c2.485 0 3.856 1.755 3.856 4.448 0 2.03-.492 3.237-1.563 4.386.169-.18.197-.253.207-.305a1.2 1.2 0 00-.019.16l.228.082zm-9.188 5.742h12.95a5.88 5.88 0 00-.608-2.402c-.428-.835-2.214-1.414-4.46-2.224-.608-.218-.509-1.765-.24-2.053.631-.677 1.166-1.471 1.166-3.386 0-1.934-.782-2.96-2.33-2.96-1.549 0-2.336 1.026-2.336 2.96 0 1.915.534 2.709 1.165 3.386.27.288.369 1.833-.238 2.053-2.245.81-4.033 1.389-4.462 2.224a5.88 5.88 0 00-.607 2.402z" fill={fill}></path>
          </svg>
        </div>
        <div className={`${styles['cart-icon-container']}`}>
          <div
            className={`${styles['cart-icon']} ${!isHomePage ? styles['dark'] : ''}`}
            onClick={toggleCartModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M5.058 23a2 2 0 104.001-.001A2 2 0 005.058 23zm12.079 0c0 1.104.896 2 2 2s1.942-.896 1.942-2-.838-2-1.942-2-2 .896-2 2zM0 1a1 1 0 001 1h1.078l.894 3.341L5.058 13c0 .072.034.134.042.204l-1.018 4.58A.997.997 0 005.058 19h16.71a1 1 0 000-2H6.306l.458-2.061c.1.017.19.061.294.061h12.31c1.104 0 1.712-.218 2.244-1.5l3.248-6.964C25.423 4.75 24.186 4 23.079 4H5.058c-.157 0-.292.054-.438.088L3.844.772A1 1 0 002.87 0H1a1 1 0 00-1 1zm5.098 5H22.93l-3.192 6.798c-.038.086-.07.147-.094.19-.067.006-.113.012-.277.012H7.058v-.198l-.038-.195L5.098 6z" fill={fill} />
            </svg>
          </div>
          {cartCount > 0 && (
            <div
              className={`${styles['cart-badge']}`}
              id={isHomePage || isDarkMode ? styles['cart-badge-light'] : styles['cart-badge-dark']}
            ></div>
          )}
        </div>

      </header>
    </>
  );
}

export default Header;