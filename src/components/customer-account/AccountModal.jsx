// AccountModal.jsx

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { deleteUserAccount, logoutUser } from "../../firebase/authService";
import styles from './customerAccount.module.scss';
import { defaultProfilePhoto } from "../../assets/images";
import { useUserProfile } from "../../hooks/useUserProfile";
import ThemeContext, { useTheme } from "../../store/ThemeContext";
import { useEffect, useState } from "react";

/**
 * Renders modal with user account options.
 * Includes account details, order history, logout, and account deletion.
 *
 * @param {Object} props - Component props
 * @returns {JSX.Element} AccountModal component.
 */
const AccountModal = ({ toggleAccountModalManager, toggleMobileMenu, isMobileMenuVisible }) => {
  const { userDetails, photoURL } = useUserProfile();
  const { isDarkMode } = useTheme(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsOpen(false); 
    setTimeout(() => handleClick(), 200);
  };

  useEffect(() => {
    setIsOpen(true);
    return () => setIsOpen(false);
  }, []);

  /**
   * Logs out the user using Firebase authentication.
   */
  const handleLogout = async () => {
    await logoutUser();
  };

  /**
   * Deletes the user account from Firebase.
   */
  const handleDeleteAccount = async () => {
    await deleteUserAccount();
  };

  /**
   * Handles navigation click by toggling modal and mobile menu visibility.
   */
  const handleClick = () => {
    toggleAccountModalManager();
    isMobileMenuVisible && toggleMobileMenu();
  };

  return ReactDOM.createPortal (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className={`modal account-modal ${isOpen ? 'open' : 'close'}`}>
        <div className={styles['account-modal-header']}>
          <div className={styles['account-modal-title']}>
              <h3>Your Account</h3>
              <button onClick={closeModal} id={styles['exit-account-modal']} className='exit-modal-btn'>X</button>
            </div>
          <div className={styles['profile-image-container']}>
            <img src={photoURL || defaultProfilePhoto} alt="Profile photo"/>
            <p className={styles['profile-name']}>{userDetails?.name || ''}</p>
          </div>
        </div>
        <ul className={styles['account-menu']}>
          <li className={`${styles['account-menu-item']} ${isDarkMode ? styles['dark'] : ''}`} onClick={handleClick}>
            <Link to="/order-history">ORDER HISTORY</Link>
          </li>
          <li className={`${styles['account-menu-item']} ${isDarkMode ? styles['dark'] : ''}`} onClick={handleClick}>
            <Link to="/account-details">ACCOUNT DETAILS</Link>
          </li>
          <li className={`${styles['account-menu-item']} ${isDarkMode ? styles['dark'] : ''}`} onClick={handleLogout}>LOGOUT</li>
          <li className={`${styles['account-menu-item']} ${isDarkMode ? styles['dark'] : ''}`} onClick={handleDeleteAccount}>DELETE ACCOUNT</li>
        </ul>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default AccountModal;