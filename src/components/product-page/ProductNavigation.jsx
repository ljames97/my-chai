// ProductNavigation.jsx

import { collections } from '../data';
import styles from './ProductPage.module.scss';
import { useNavigate, Link } from 'react-router-dom';

/**
 * Breadcrumb-style navigation for the product page.
 * @param {Object} props
 * @param {Object} props.product - The product object.
 * @returns {JSX.Element} Navigation bar with breadcrumb links.
 */
const ProductNavigation = ({ product }) => {
  const collection = collections.find(collection => collection.id === product.collectionId);
  const navigate = useNavigate();

  const handleCollectionNavigation = () => {
    navigate(`/collection/${collection.path}`);
  }

  return (
    <div className={styles['product-navigation']}>
      <Link to='/home'>Home</Link>
      <div>•</div>
      <div className={styles['nav-btn']} onClick={handleCollectionNavigation}>{product.collection}</div>
      <div>•</div>
      <div>{product.title}</div>
    </div>
  ) 
}

export default ProductNavigation;