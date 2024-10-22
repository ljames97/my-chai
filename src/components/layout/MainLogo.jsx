// MainLogo.jsx

import { chaiLogoLight, chaiLogoDark } from "../../assets/images";
import { useTheme } from "../../store/ThemeContext";
import styles from './layout.module.scss';
import { useNavigate } from 'react-router-dom';

const MainLogo = ({ className = '', isHomePage }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  
  const handleLogoClick = () => {
    navigate('/home');
  }
  return (
    <div onClick={handleLogoClick} className={`${styles['main-logo']} ${styles[className]}`}>
      <img src={isHomePage || isDarkMode && !className ? chaiLogoLight : chaiLogoDark} alt="brand logo" />
    </div>
  );
}

export default MainLogo;