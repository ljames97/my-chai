// AccountModal.jsx

import { Link } from "react-router-dom";
import { deleteUserAccount, logoutUser } from "../../firebase/authService";
import styles from './customerAccount.module.scss';

const AccountModal = ({ toggleAccountModalManager, toggleMobileMenu }) => {

  const handleLogout = async () => {
    await logoutUser();
  }

  const handleDeleteAccount = async () => {
    await deleteUserAccount();
  }

  const handleClick = () => {
    toggleAccountModalManager();
    toggleMobileMenu();
  }

  return (
    <div className="modal account-modal">
      <h3 className={styles['account-modal-header']}>Your Account</h3>
      <div className={styles['account-modal-buttons']}>
        <p onClick={toggleAccountModalManager}>← Back to menu</p>
      </div>
      <ul className={styles['account-menu']}>
        <li className={styles['account-menu-item']}>ORDER HISTORY</li>
        <li className={styles['account-menu-item']} onClick={handleClick}>
          <Link to="/account-details">ACCOUNT DETAILS</Link>
        </li>
        <li className={styles['account-menu-item']} onClick={handleLogout}>LOGOUT</li>
        <li className={styles['account-menu-item']} onClick={handleDeleteAccount}>DELETE ACCOUNT</li>
      </ul>
    </div>
  )
}

export default AccountModal;