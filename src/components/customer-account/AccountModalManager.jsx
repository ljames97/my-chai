// AccountModalManager.jsx

import useAuth from "../../hooks/useAuth"
import LoginModal from "./LoginModal";
import AccountModal from "./AccountModal";

const AccountModalManager = ({ toggleAccountModalManager, toggleMobileMenu }) => {
  const user = useAuth();

  return (
    <div>
      {user ? <AccountModal toggleAccountModalManager={toggleAccountModalManager} toggleMobileMenu={toggleMobileMenu} /> : <LoginModal toggleAccountModalManager={toggleAccountModalManager} /> }
    </div>
  )
}

export default AccountModalManager;