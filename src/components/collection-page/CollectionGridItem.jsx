// CollectionGridItem.jsx

import { calculateAverageRating, getProductReviews } from "../global/globalUtils";
import StarRating from "../product-page/product-reviews/StarRating";
import ProductImageTitle from "./ProductImageTitle";
import styles from './collectionPage.module.scss';
import { useNavigate } from 'react-router-dom';


const CollectionGridItem = ({ product, toggleMobileMenu }) => {
  const navigate = useNavigate();
  const productReviews = getProductReviews(product);
  const productRating = calculateAverageRating(productReviews);

  const handleClick = () => {
    navigate(`/product/${product.path}`);
    if (toggleMobileMenu) {
      toggleMobileMenu();
    }
  }

  return (
    <div onClick={handleClick} className={styles['collection-grid-item']}>
      <ProductImageTitle product={product} />
      <div className={styles['product-reviews']}>
        <StarRating rating={productRating}/>
        <div className="number-of-reviews">{`(${productReviews.length})`}</div>
      </div>

      <p className={styles['grid-item-price']}>{`from ${product.price['50g']}`}</p>
    </div>
  )
}

export default CollectionGridItem;