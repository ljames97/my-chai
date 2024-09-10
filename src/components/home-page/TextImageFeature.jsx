// TextImageFeature.jsx

import styles from './homePage.module.scss';

const TextImageFeature = ({ text, image }) => {
  return (
    <div className={styles['text-image-feature']}>
      <div className={styles['image-container']}>
        <img src={image}/>
      </div>
      <h3 className={styles['featured-header']}>{text.header}</h3>
      <p className={styles['featured-text']}>{text.main}</p>
      <button className={styles['featured-button']}>{text.button}</button>
    </div>
  );
}

export default TextImageFeature;