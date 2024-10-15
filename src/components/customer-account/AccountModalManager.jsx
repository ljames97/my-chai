// AccountModalManager.jsx

import useAuth from "../../hooks/useAuth"
import LoginModal from "./LoginModal";
import AccountModal from "./AccountModal";

const AccountModalManager = ({ toggleAccountModalManager }) => {
  const user = useAuth();

  return (
    <div>
      {user ? <AccountModal toggleAccountModalManager={toggleAccountModalManager} /> : <LoginModal toggleAccountModalManager={toggleAccountModalManager} /> }
    </div>
  )
}

export default AccountModalManager;