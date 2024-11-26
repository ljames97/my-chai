// TextImageFeature.jsx

import { useTheme } from '../../store/ThemeContext';
import styles from './homePage.module.scss';
import { useNavigate } from 'react-router-dom';

/**
 * Renders a text and image feature section with a call-to-action button.
 *
 * @component
 * @param {Object} props - Props for the component.
 * @param {Object} props.text - The text content for the feature.
 * @param {string} props.image - The URL of the image.
 * @param {string} props.buttonLink - The link the button navigates to.
 * @returns {JSX.Element} A styled feature component with text, image, and button.
 */
const TextImageFeature = ({ text, image, buttonLink, className }) => {
  const navigate  = useNavigate();
  const { isDarkMode } = useTheme();
  const handleClick = () => {
    navigate(`${buttonLink}`);
  }

  return (
    <div className={styles['text-image-feature']}>
      <div className={`${styles['image-container']} ${styles[`${className}`]}`}>
        <img src={image} alt='Featured image'/>
      </div>
      <div className={styles['featured-content']}>
        <h3 className={styles['featured-sub-header']}>{text.subHeader}</h3>
        <p className={styles['featured-text']}>{text.main}</p>
        <button onClick={handleClick} className={`${styles['featured-button']} ${isDarkMode ? styles['dark']: ''}`} aria-label={text.button}>{text.button}</button>
      </div>

    </div>
  );
}

export default TextImageFeature;