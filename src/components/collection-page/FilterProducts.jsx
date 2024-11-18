// FilterProducts.jsx

import { useEffect, useRef, useState } from 'react';
import styles from './collectionPage.module.scss';

/**
 * Provides sorting options for a collection of products.
 * Users can sort products by price (ascending or descending) or in alphabetical order.
 *
 * @component
 * @param {Object} props - Component props
 * @returns {JSX.Element} FilterProducts component
 */
const FilterProducts = ({ onSort }) => {
  const [isSortMenuVisible, setIsSortMenuVisible] = useState(false);
  const sortMenuRef = useRef(null);

  /**
   * Toggles visibility of sort menu dropdown.
   */
  const handleSortClick = () => {
    setIsSortMenuVisible(!isSortMenuVisible);
  }

  /**
   * Closes sort menu if the user clicks outside of it.
   * @param {Event} event - Click event
   */
  const handleClickOutside = (event) => {
    if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
      setIsSortMenuVisible(false);
    }
  };

  // Effect to listen for clicks outside the sort menu when it is open.
  useEffect(() => {
    if (isSortMenuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSortMenuVisible]);

  return (
    <div className={styles['filter-bar']} ref={sortMenuRef}>
      <button id={styles['sort-btn']} onClick={handleSortClick} aria-label='Sort products'>SORT ◿</button>

      {isSortMenuVisible &&(
        <div className={styles['sort-menu']}>
          <button onClick={() => { onSort('price-low-high'); setIsSortMenuVisible(false);}} aria-label='Price: Low to High'>Price: Low to High</button>
          <button onClick={() => { onSort('price-high-low'); setIsSortMenuVisible(false); }} aria-label='Price: High to Low'>Price: High to Low</button>
          <button onClick={() => { onSort('alphabetical'); setIsSortMenuVisible(false); }} aria-label='Alphabetical Order'>Alphabetical Order</button>
        </div>
      )}
    </div>
  );
}

export default FilterProducts;