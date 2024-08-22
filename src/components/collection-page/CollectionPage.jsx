// CollectionPage.jsx

import { useEffect, useState } from "react";
import { getCollectionProducts } from "../global/globalUtils";
import CollectionGrid from "./CollectionGrid";
import FilterProducts from "./FilterProducts";
import styles from './collectionPage.module.scss';
import { collections } from "../data";
import { useParams } from 'react-router-dom';


const CollectionPage = () => {
  const { path } = useParams();
  const [collection, setCollection] = useState(null);
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  // Update the collection and products whenever the path changes
  useEffect(() => {
    const selectedCollection = collections.find(collection => collection.path === path);
    if (selectedCollection) {
      setCollection(selectedCollection);
      const products = getCollectionProducts(selectedCollection);
      setCollectionProducts(products);
      setSortedProducts(products); // Initialize sorted products
    }
  }, [path]);

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

  if (!collection) {
    return <div>Loading...</div>; // Or "Collection not found" if applicable
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