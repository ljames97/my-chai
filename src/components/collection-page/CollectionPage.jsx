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
  
    const getFirstPrice = (product) => {
      const priceValues = Object.values(product.price);
      const firstPrice = priceValues[0]; // Assuming the first price is always the smallest ('50g')
      return parseFloat(firstPrice.replace('£', '')) || 0; // Convert the price to a number for comparison
    };
  
    switch (sortType) {
      case 'price-low-high':
        sortedArray.sort((a, b) => getFirstPrice(a) - getFirstPrice(b));
        break;
      case 'price-high-low':
        sortedArray.sort((a, b) => getFirstPrice(b) - getFirstPrice(a));
        break;
      case 'alphabetical':
        sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        sortedArray = collectionProducts;
    }
  
    setSortedProducts(sortedArray);
  }

  if (!collection) {
    return <div>Loading...</div>; // Or "Collection not found" if applicable
  }

  return (
    <div className={styles['collection-page']}>
      <h3 className={styles['collection-title']}>{collection.title}</h3>
      <div className={styles ['collection-description']}>{collection.description}</div>
      <FilterProducts onSort={handleSort}/>
      <CollectionGrid products={sortedProducts} />
    </div>
  );
}

export default CollectionPage;