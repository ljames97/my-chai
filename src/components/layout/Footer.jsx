// Footer.jsx

import { useState } from 'react';
import styles from './layout.module.scss'
import { useTheme } from '../../store/ThemeContext';
import { Link } from 'react-router-dom';

/**
 * Footer component providing navigation links and a newsletter subscription form.
 *
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  const [email, setEmail] = useState('');
  const { isDarkMode } = useTheme();

  /**
   * Handles changes in the email input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event for the input.
   */
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  /**
   * Handles newsletter form submission.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
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
            <Link to="/">Delivery & Returns</Link>
          </li>
          <li className={styles['footer-nav-item']}>
            <Link to="/">Wholesale</Link>
          </li>
          <li className={styles['footer-nav-item']}>
            <Link to="/">Refund Policy</Link>
          </li>
          <li className={styles['footer-nav-item']}>
            <Link to="/">Terms & Conditions</Link>
          </li>
        </ul>
      </nav>
      <div className={styles['newsletter']}>
        <p className={styles['newsletter-text']}>Subscribe for exclusive offers, free giveaways and My Chai news.</p>
        <form onSubmit={handleNewsletterSubmit} className={styles['newsletter-form']} aria-labelledby="newsletterFormTitle">
          <label htmlFor="newsletter-email"></label>
          <input 
            type="email"
            id="newsletter-email"
            className={styles['newsletter-email']}
            placeholder="your-email@example.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button className={`${styles['form-button']} ${isDarkMode ? styles['dark'] : ''}`} aria-label='Join'>JOIN</button>
        </form>
      </div>
      <p className={styles['copyright']}>MyChai | © 2024 All Rights Reserved.</p>
  </footer>
  )
}

export default Footer;