// AccountModal.jsx

import { logoutUser } from "../../firebase/authService";
import styles from './customerAccount.module.scss';

const AccountModal = ({ toggleAccountModalManager }) => {

  const handleLogout = async () => {
    await logoutUser();
  }

  return (
    <div className="modal account-modal">
      <h3 className={styles['account-modal-header']}>Your Account</h3>
      <div className={styles['account-modal-buttons']}>
        <p onClick={toggleAccountModalManager}>← Back to menu</p>
        <p onClick={handleLogout}>Logout</p>
      </div>
    </div>
  )
}

export default AccountModal;