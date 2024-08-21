// ProductNavigation.jsx

import { collections } from '../data';
import styles from './ProductPage.module.scss';
import { useNavigate, Link } from 'react-router-dom';


const ProductNavigation = ({ product }) => {
  const collection = collections.find(collection => collection.id === product.collectionId);
  const navigate = useNavigate();

  const handleCollectionNavigation = () => {
    navigate(`/collection/${collection.id}`);
  }

  return (
    <div className={styles['product-navigation']}>
      <Link to='/home'>Home</Link>
      <div>▹</div>
      <div onClick={handleCollectionNavigation}>{product.collection}</div>
      <div>▹</div>
      <div>{product.title}</div>
    </div>
  ) 
}

export default ProductNavigation;