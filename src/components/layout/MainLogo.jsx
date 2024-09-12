// MainLogo.jsx

import { chaiLogoLight, chaiLogoDark } from "../../assets/images";
import styles from './layout.module.scss';
import { useNavigate } from 'react-router-dom';

const MainLogo = ({ className = '', isHomePage }) => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/home');
  }
  return (
    <div onClick={handleLogoClick} className={`${styles['main-logo']} ${styles[className]}`}>
      <img src={isHomePage? chaiLogoLight : chaiLogoDark} alt="brand logo" />
    </div>
  );
}

export default MainLogo;