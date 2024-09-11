// TextImageFeature.jsx

import styles from './homePage.module.scss';
import { useNavigate } from 'react-router-dom';

const TextImageFeature = ({ text, image, buttonLink }) => {
  const navigate  = useNavigate();
  const handleClick = () => {
    navigate(`${buttonLink}`);
  }

  return (
    <div className={styles['text-image-feature']}>
      <div className={styles['image-container']}>
        <img src={image}/>
      </div>
      <h3 className={styles['featured-header']}>{text.header}</h3>
      <h3 className={styles['featured-sub-header']}>{text.subHeader}</h3>
      <p className={styles['featured-text']}>{text.main}</p>
      <button onClick={handleClick} className={styles['featured-button']}>{text.button}</button>
    </div>
  );
}

export default TextImageFeature;