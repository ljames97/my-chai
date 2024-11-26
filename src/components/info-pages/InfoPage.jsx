// InfoPage.jsx

import styles from './infoPages.module.scss';

/**
 * Displays informational content with a header and image.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.featuredImage - The URL or path to the featured image.
 * @param {string} props.header - The main header text for the page.
 * @param {string[]} props.mainText - An array of strings for the main content paragraphs.
 * @returns {JSX.Element} A layout displaying the featured image, header, and content.
 */
const InfoPage = ({ featuredImage, header, mainText }) => {
  return (
    <div className={styles['info-page']}>
      <div className={styles['cover-image-container']}>
        <img src={featuredImage} alt='Featured image'/>
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