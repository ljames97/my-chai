// AccountModalManager.jsx

import useAuth from "../../hooks/useAuth"
import LoginModal from "./LoginModal";
import AccountModal from "./AccountModal";

/**
 * Decides whether to show the AccountModal or LoginModal.
 * 
 * @param {Object} props - Component props
 * @returns {JSX.Element} AccountModalManager component.
 */
const AccountModalManager = ({ toggleAccountModalManager, toggleMobileMenu }) => {
  const user = useAuth();

  return (
    <div>
      {user ? <AccountModal toggleAccountModalManager={toggleAccountModalManager} toggleMobileMenu={toggleMobileMenu} /> : <LoginModal toggleAccountModalManager={toggleAccountModalManager} /> }
    </div>
  )
}

export default AccountModalManager;