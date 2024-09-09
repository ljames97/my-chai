// TextImageFeature.jsx

import styles from './homePage.module.scss';

const TextImageFeature = ({ text, image }) => {
  return (
    <div className={styles['text-image-feature']}>
      <div className={styles['image-container']}>
        <img src={image}/>
      </div>
      <div className={styles['featured-text']}>
        <h3>{text.header}</h3>
        <p>{text.main}</p>
      </div>
      <button className={styles['featured-button']}>{text.button}</button>
    </div>
  );
}

export default TextImageFeature;