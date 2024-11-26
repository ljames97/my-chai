// DesktopMenu.jsx

import { Link } from 'react-router-dom';
import styles from './desktopMenu.module.scss';
import { useState } from 'react';
import { useTheme } from '../../store/ThemeContext';

const DesktopMenu = ( { isHomePage }) => {
  const [showTeaSubMenu, setShowTeaSubMenu] = useState(false);
  const [showInfoSubmenu, setShowInfoSubmenu] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleTeaSubMenu = () => setShowTeaSubMenu((prev) => !prev);
  const toggleInfoSubMenu = () => setShowInfoSubmenu((prev) => !prev);
  const handleSubmenuItemClick = () => {
    setShowTeaSubMenu(false);
    setShowInfoSubmenu(false);
  }


  return (
    <ul className={styles['desktop-menu-items']}>
      <li className={`${styles['desktop-menu-item']} ${!isHomePage ? styles['black-text'] : ''}`}>
        <Link to="/home">HOME</Link>
      </li>
      <li className={`${styles['desktop-menu-item']} ${!isHomePage ? styles['black-text'] : ''} ${isDarkMode ? styles['dark'] : ''}`}
      onMouseEnter={toggleTeaSubMenu}
      onMouseLeave={toggleTeaSubMenu}
      >
        TEA
        {showTeaSubMenu && (
          <ul className={`${styles['submenu']} ${isDarkMode ? styles['dark'] : ''}`}>
            <li onClick={handleSubmenuItemClick} className={`${styles['submenu-item']} ${!isHomePage ? styles['black-text'] : ''} ${isDarkMode ? styles['dark'] : ''}`}>
              <Link to="/collection/black-tea">Black Tea</Link>
            </li>
            <li onClick={handleSubmenuItemClick} className={`${styles['submenu-item']} ${!isHomePage ? styles['black-text'] : ''} ${isDarkMode ? styles['dark'] : ''}`}>
              <Link to="/collection/green-tea">Green Tea</Link>
            </li>
            <li onClick={handleSubmenuItemClick} className={`${styles['submenu-item']} ${!isHomePage ? styles['black-text'] : ''} ${isDarkMode ? styles['dark'] : ''}`}>
              <Link to="/collection/oolong">Oolong</Link>
            </li>
            <li onClick={handleSubmenuItemClick} className={`${styles['submenu-item']} ${!isHomePage ? styles['black-text'] : ''} ${isDarkMode ? styles['dark'] : ''}`}>
              <Link to="/collection/herbal">Herbal</Link>
            </li>
          </ul>
        )}
      </li>
      <li className={`${styles['desktop-menu-item']} ${!isHomePage ? styles['black-text'] : ''}`}>
        <Link to="/collection/teaware">TEAWARE</Link>
      </li>
      <li className={`${styles['desktop-menu-item']} ${!isHomePage ? styles['black-text'] : ''} ${isDarkMode ? styles['dark'] : ''}`}
      onMouseEnter={toggleInfoSubMenu}
      onMouseLeave={toggleInfoSubMenu}
      >
        INFO
        {showInfoSubmenu && (
          <ul className={`${styles['submenu']} ${isDarkMode ? styles['dark'] : ''}`}>
            <li onClick={handleSubmenuItemClick} className={`${styles['submenu-item']} ${!isHomePage ? styles['black-text'] : ''} ${isDarkMode ? styles['dark'] : ''}`}>
              <Link to="/about">About Us</Link>
            </li>
            <li onClick={handleSubmenuItemClick} className={`${styles['submenu-item']} ${!isHomePage ? styles['black-text'] : ''} ${isDarkMode ? styles['dark'] : ''}`}>
              <Link to="/journal">Journal</Link>
            </li>
          </ul>
        )}
      </li>
      <li className={`${styles['desktop-menu-item']} ${!isHomePage ? styles['black-text'] : ''}`}>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
}

export default DesktopMenu;