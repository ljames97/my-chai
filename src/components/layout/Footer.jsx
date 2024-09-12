// Footer.jsx

import { useState } from 'react';
import styles from './layout.module.scss'

const Footer = () => {
  const [email, setEmail] = useState('');

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
          <li className={styles['footer-nav-item']}>Delivery & Returns</li>
          <li className={styles['footer-nav-item']}>Wholesale</li>
          <li className={styles['footer-nav-item']}>Refund Policy</li>
          <li className={styles['footer-nav-item']}>Terms & Conditions</li>
        </ul>
      </nav>
      <div className={styles['newsletter']}>
        <p className={styles['newsletter-text']}>Subscribe for exclusive offers, free giveaways and My Chai news.</p>
        <form onSubmit={handleNewsletterSubmit} className={styles['newsletter-form']}>
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="your-email@example.com" value={email} onChange={handleEmailChange} />
          <button className={styles['form-button']}>JOIN</button>
        </form>
      </div>
      <p className={styles['copyright']}>MyChai | © 2024 All Rights Reserved.</p>
  </footer>
  )
}

export default Footer;