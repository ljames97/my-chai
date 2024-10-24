// FeaturedCollection.jsx

import { useTheme } from "../../store/ThemeContext";
import CollectionGridItem from "../collection-page/CollectionGridItem";
import styles from './homePage.module.scss';

const FeaturedCollection = ({ header, collection }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={styles['featured-collection']}>
      <h4 className={`${styles['feature-header']} ${isDarkMode ? styles['dark'] : ''}`}>{header}</h4>
      <div className={styles['collection-slideshow']}>
      {collection.map((product, index) => (
        <CollectionGridItem key={index} product={product} />
      ))}
      </div>
    </div>
  )
}

export default FeaturedCollection;