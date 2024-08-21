// CollectionGrid.jsx

import CollectionGridItem from "./CollectionGridItem";
import styles from './collectionPage.module.scss';

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