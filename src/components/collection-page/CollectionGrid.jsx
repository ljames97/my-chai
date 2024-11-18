// CollectionGrid.jsx

import CollectionGridItem from "./CollectionGridItem";
import styles from './collectionPage.module.scss';

/**
 * Displays a grid of products.
 * Maps over products array and renders each item as a CollectionGridItem.
 * 
 * @component
 * @param {Array} products - Array of product objects to display.
 * @returns {JSX.Element} Grid of products displayed on the collection page.
 */
const CollectionGrid = ({ products }) => {
  return (
    <div className={styles['collection-grid']}>
      {products.map((product, index) => (
        <CollectionGridItem key={index} product={product}/>
      ))}
    </div>
  );
}

export default CollectionGrid;