// FeaturedCollection.jsx

import { useTheme } from "../../store/ThemeContext";
import CollectionGridItem from "../collection-page/CollectionGridItem";
import styles from './homePage.module.scss';

/**
 * Renders a featured product collection with a header and a grid of items.
 * 
 * This component is used to highlight a specific collection of products on a page, such as the home page.
 * It supports theme-based styling (dark mode).
 * 
 * @component
 * @param {Object} props
 * @param {string} props.header - The header text for the featured collection.
 * @param {Array} props.collection - The list of products to display in the collection.
 * 
 * @returns {JSX.Element} A styled grid of featured products with a header.
 */
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