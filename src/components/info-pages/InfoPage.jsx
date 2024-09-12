// InfoPage.jsx

import styles from './infoPages.module.scss';

const InfoPage = ({ featuredImage, header, mainText }) => {
  return (
    <div className="info-page">
      <div className="cover-image-container">
        <img src={featuredImage}/>
      </div>
      <div className={styles['info-text']}>
        <h3>{header}</h3>
        {mainText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  )
}

export default InfoPage;