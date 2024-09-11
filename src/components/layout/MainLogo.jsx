// MainLogo.jsx

import { chaiLogo } from "../../assets/images";
import styles from './layout.module.scss';
import { useNavigate } from 'react-router-dom';

const MainLogo = ({ className = '' }) => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/home');
  }
  return (
    <div onClick={handleLogoClick} className={`${styles['main-logo']} ${styles[className]}`}>
      <img src={chaiLogo} alt="brand logo" />
    </div>
  );
}

export default MainLogo;