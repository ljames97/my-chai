// Footer.jsx

import { useState } from 'react';
import styles from './layout.module.scss'
import { useTheme } from '../../store/ThemeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { isDarkMode } = useTheme();

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    console.log(email);
    setEmail('');
  }

  return (
    <footer>
      <nav className={styles['footer-nav']}>
        <div className={styles['footer-nav-heading']}>Information</div>
        <ul className={styles['footer-nav-items']}>
          <li className={styles['footer-nav-item']}>
            <Link to="/home">Delivery & Returns</Link>
          </li>
          <li className={styles['footer-nav-item']}>
            <Link to="/home">Wholesale</Link>
          </li>
          <li className={styles['footer-nav-item']}>
            <Link to="/home">Refund Policy</Link>
          </li>
          <li className={styles['footer-nav-item']}>
            <Link to="/home">Terms & Conditions</Link>
          </li>
        </ul>
      </nav>
      <div className={styles['newsletter']}>
        <p className={styles['newsletter-text']}>Subscribe for exclusive offers, free giveaways and My Chai news.</p>
        <form onSubmit={handleNewsletterSubmit} className={styles['newsletter-form']}>
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="your-email@example.com" value={email} onChange={handleEmailChange} />
          <button className={`${styles['form-button']} ${isDarkMode ? styles['dark'] : ''}`}>JOIN</button>
        </form>
      </div>
      <p className={styles['copyright']}>MyChai | © 2024 All Rights Reserved.</p>
  </footer>
  )
}

export default Footer;