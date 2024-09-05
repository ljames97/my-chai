// FeaturedCollection.jsx

import CollectionGridItem from "../collection-page/CollectionGridItem";
import styles from './homePage.module.scss';

const FeaturedCollection = ({ header, collection }) => {
  return (
    <div className="featured-collection">
      <h4>{header}</h4>
      <div className={styles['collection-slideshow']}>
      {collection.map((product, index) => (
        <CollectionGridItem key={index} product={product} />
      ))}
      </div>

    </div>
  )
}

export default FeaturedCollection;