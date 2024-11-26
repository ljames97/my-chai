// MobileMenu.jsx

import { Link } from 'react-router-dom';
import styles from './mobileMenu.module.scss';
import { useEffect, useState } from 'react';
import { products } from '../data';
import ProductImageTitle from '../collection-page/ProductImageTitle';
import { useTheme } from '../../store/ThemeContext';

/**
 * Responsive navigation menu for mobile devices.
 * Includes theme switching, search functionality, and navigation links.
 *
 * @param {Function} toggleMobileMenu - Function to toggle the visibility of the menu.
 * @param {Function} toggleAccountModalManager - Function to toggle the account modal.
 * @returns {JSX.Element} Rendered MobileMenu component.
 */
const MobileMenu = ({ toggleMobileMenu, toggleAccountModalManager }) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleThemeSwitch = () => {
    toggleTheme();
  }

  /**
   * Handles search input change and filters products based on the search term.
   *
   * @param {Event} event - Input change event.
   */
  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const userSearchProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
    if (searchTerm.length > 1) {
      setSearchProducts(userSearchProducts);
    } else {
      setSearchProducts([]);
    }
    console.log(userSearchProducts)
  }

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false); 
    setTimeout(() => toggleMobileMenu(), 200);
  };

  useEffect(() => {
    setIsOpen(true);
    return () => setIsOpen(false);
  }, []);


  return (
    <div className={`modal ${styles['mobile-menu']} ${isOpen ? 'open' : 'close-left'}`}>
    <div className={`${styles['mobile-menu-header']} ${isDarkMode ? styles['dark'] : ''}`}>
        <svg onClick={toggleAccountModalManager} id='profile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill={isDarkMode ? 'white' : ''}>
          <path d="M10.713 8.771c.31.112.53.191.743.27.555.204.985.372 1.367.539 1.229.535 1.993 1.055 2.418 1.885.464.937.722 1.958.758 2.997.03.84-.662 1.538-1.524 1.538H1.525c-.862 0-1.554-.697-1.524-1.538a7.36 7.36 0 01.767-3.016c.416-.811 1.18-1.33 2.41-1.866a25.25 25.25 0 011.366-.54l.972-.35a1.42 1.42 0 00-.006-.072c-.937-1.086-1.369-2.267-1.369-4.17C4.141 1.756 5.517 0 8.003 0c2.485 0 3.856 1.755 3.856 4.448 0 2.03-.492 3.237-1.563 4.386.169-.18.197-.253.207-.305a1.2 1.2 0 00-.019.16l.228.082zm-9.188 5.742h12.95a5.88 5.88 0 00-.608-2.402c-.428-.835-2.214-1.414-4.46-2.224-.608-.218-.509-1.765-.24-2.053.631-.677 1.166-1.471 1.166-3.386 0-1.934-.782-2.96-2.33-2.96-1.549 0-2.336 1.026-2.336 2.96 0 1.915.534 2.709 1.165 3.386.27.288.369 1.833-.238 2.053-2.245.81-4.033 1.389-4.462 2.224a5.88 5.88 0 00-.607 2.402z"></path>
        </svg>
        <button onClick={handleThemeSwitch} className={`${styles['theme-switch-btn']} ${isDarkMode ? styles['dark'] : ''}`} aria-label='Switch to dark or light mode'>{isDarkMode ? 'Light mode' : 'Dark mode'}</button>
        <button className={`${isDarkMode ? 'dark' : ''} exit-modal-btn`} onClick={closeModal} aria-label='Close mobile menu'>X</button>
      </div>
      <div className={`${styles['search-bar']} ${isDarkMode ? styles['dark'] : ''}`}>
        <input 
          type='text'
          placeholder='Search...'
          id='search'
          onChange={handleChange}
        />
        <button id={styles['search-button']} aria-label='Search'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
            <circle cx="11" cy="11" r="6"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      {searchProducts.length > 0 ? 
      <div className={styles['search-results']}>
        {searchProducts.map((product) => (
          <ProductImageTitle toggleMobileMenu={toggleMobileMenu} key={product.id} product={product} className={'search-item'} />
        ))}
      </div> : ''}
      <ul className={`${styles['mobile-menu-items']} ${isDarkMode ? styles['dark']: ''}`}>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/home">HOME</Link>
        </li>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/collection/black-tea">BLACK TEA</Link>
        </li>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/collection/green-tea">GREEN TEA</Link>
        </li>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/collection/oolong">OOLONG</Link>
        </li>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/collection/herbal">HERBAL</Link>
        </li>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/collection/teaware">TEAWARE</Link>
        </li>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/journal">JOURNAL</Link>
        </li>
        <li onClick={closeModal} className={`${styles['mobile-menu-item']} ${isDarkMode ? styles['dark'] : ''}`}>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;