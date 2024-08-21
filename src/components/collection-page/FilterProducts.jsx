// FilterProducts.jsx

import { useEffect, useRef, useState } from 'react';
import styles from './collectionPage.module.scss';

const FilterProducts = ({ onSort }) => {
  const [isSortMenuVisible, setIsSortMenuVisible] = useState(false);
  const sortMenuRef = useRef(null);

  const handleSortClick = () => {
    setIsSortMenuVisible(!isSortMenuVisible);
  }

  const handleClickOutside = (event) => {
    if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
      setIsSortMenuVisible(false);
    }
  };

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
      <button id={styles['sort-btn']} onClick={handleSortClick} >SORT ◿</button>

      {isSortMenuVisible &&(
        <div className={styles['sort-menu']}>
          <button onClick={() => { onSort('price-low-high'); setIsSortMenuVisible(false); }}>Price: Low to High</button>
          <button onClick={() => { onSort('price-high-low'); setIsSortMenuVisible(false); }}>Price: High to Low</button>
          <button onClick={() => { onSort('alphabetical'); setIsSortMenuVisible(false); }}>Alphabetical Order</button>
        </div>
      )}
    </div>
  );
}

export default FilterProducts;