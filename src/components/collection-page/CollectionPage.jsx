// CollectionPage.jsx

import { getCollectionProducts } from "../global/globalUtils";
import CollectionGrid from "./CollectionGrid";
import FilterProducts from "./FilterProducts";
import styles from './collectionPage.module.scss';

const CollectionPage = ({ collection }) => {
  const collectionProducts = getCollectionProducts(collection)

  return (
    <div className={styles['collection-page']}>
      <div className={styles['collection-title']}>{collection.title}</div>
      <div className={styles ['collection-description']}>{collection.description}</div>
      <FilterProducts />
      <CollectionGrid products={collectionProducts} />
    </div>
  )
}

export default CollectionPage;