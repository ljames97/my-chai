// CollectionPage.jsx

import { useState } from "react";
import { getCollectionProducts } from "../global/globalUtils";
import CollectionGrid from "./CollectionGrid";
import FilterProducts from "./FilterProducts";
import styles from './collectionPage.module.scss';
import { collections } from "../data";
import { useParams } from 'react-router-dom';


const CollectionPage = () => {
  const { id } = useParams();
  const collection = collections.find(collection => collection.id === parseInt(id));

  const collectionProducts = getCollectionProducts(collection);
  const [sortedProducts, setSortedProducts] = useState(collectionProducts);

  const handleSort = (sortType) => {
    let sortedArray = [...sortedProducts];

    switch (sortType) {
      case 'price-low-high':
        sortedArray.sort((a, b) => parseFloat(a.price.replace('£', '')) - parseFloat(b.price.replace('£', '')));
        break;
      case 'price-high-low':
        sortedArray.sort((a, b) => parseFloat(b.price.replace('£', '')) - parseFloat(a.price.replace('£', '')));
        break;
      case 'alphabetical':
        sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        sortedArray = collectionProducts;
    }

    console.log(sortedArray);

    setSortedProducts(sortedArray);
  }

  return (
    <div className={styles['collection-page']}>
      <div className={styles['collection-title']}>{collection.title}</div>
      <div className={styles ['collection-description']}>{collection.description}</div>
      <FilterProducts onSort={handleSort}/>
      <CollectionGrid products={sortedProducts} />
    </div>
  );
}

export default CollectionPage;