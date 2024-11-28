// MainLogo.jsx

import { chaiLogoLight, chaiLogoDark } from "../../assets/images";
import { useTheme } from "../../store/ThemeContext";
import styles from './layout.module.scss';
import { useNavigate } from 'react-router-dom';

/**
 * Displays the brand logo with dynamic styling based on the theme or homepage context.
 * Clicking the logo navigates the user to the home page.
 *
 * @component
 * @param {string} className - Optional additional CSS class for customization.
 * @param {boolean} isHomePage - Determines if the component is on the homepage, affecting logo style.
 * @returns {JSX.Element} The rendered MainLogo component.
 */
const MainLogo = ({ className = '', isHomePage }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  
  const handleLogoClick = () => {
    navigate('/');
  }
  return (
    <div onClick={handleLogoClick} className={`${styles['main-logo']} ${styles[className]}`}>
      <img src={isHomePage || isDarkMode && !className ? chaiLogoLight : chaiLogoDark} alt="brand logo" />
    </div>
  );
}

export default MainLogo;