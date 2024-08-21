// CollectionGridItem.jsx

import { calculateAverageRating, getProductReviews } from "../global/globalUtils";
import StarRating from "../product-page/product-reviews/StarRating";
import styles from './collectionPage.module.scss';

const CollectionGridItem = ({ product }) => {
  const productReviews = getProductReviews(product);
  const productRating = calculateAverageRating(productReviews);

  return (
    <div className={styles['collection-grid-item']}>
      <div className="grid-item-image-container">
        <img src={product.image} alt="" />
      </div>
      <p className="grid-item-title">{product.title}</p>
      <StarRating rating={productRating}/>
      <p className="grid-item-price">{product.price}</p>
    </div>
  )
}

export default CollectionGridItem;