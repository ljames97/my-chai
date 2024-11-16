// CollectionPage.jsx

import { useEffect, useState } from "react";
import { getCollectionProducts } from "../global/globalUtils";
import CollectionGrid from "./CollectionGrid";
import FilterProducts from "./FilterProducts";
import styles from './collectionPage.module.scss';
import { collections } from "../data";
import { useParams } from 'react-router-dom';

/**
 * Displays a specific product collection, including sorting options.
 * etches the collection data based on the URL path and allows sorting by price or title.
 * 
 * @component
 * @returns {JSX.Element} CollectionPage component.
 */
const CollectionPage = () => {
  const { path } = useParams();
  const [collection, setCollection] = useState(null);
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  /**
   * useEffect hook to fetch and set collection data whenever the path changes.
   */
  useEffect(() => {
    const selectedCollection = collections.find(collection => collection.path === path);
    if (selectedCollection) {
      setCollection(selectedCollection);
      const products = getCollectionProducts(selectedCollection);
      setCollectionProducts(products);
      setSortedProducts(products);
    }
  }, [path]);

  /**
   * Sorts the products based on the selected sort type.
   * 
   * @param {string} sortType - The type of sorting to apply (price, alphabetical).
   */
  const handleSort = (sortType) => {
    let sortedArray = [...sortedProducts];
  
    /**
     * Helper function to get the first available price for a product.
     * 
     * @param {Object} product - The product object.
     * @returns {number} The first price as a number, or 0 if unavailable.
     */
    const getFirstPrice = (product) => {
      const priceValues = Object.values(product.price);
      const firstPrice = priceValues[0];
      return parseFloat(firstPrice.replace('£', '')) || 0;
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
    return <div>Loading...</div>;
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