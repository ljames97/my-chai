// ProductImageTitle.jsx

import styles from './collectionPage.module.scss';
import { useNavigate } from 'react-router-dom';

const ProductImageTitle = ({ product, toggleMobileMenu, className = '' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.path}`);
    if (toggleMobileMenu) {
      toggleMobileMenu();
    }
  }

  return (
    <div onClick={handleClick} className={`${styles[className]} ${styles['product-image-title']}`}>
      <div className="grid-item-image-container">
        <img src={product.image} alt="" />
      </div>
      <p className="grid-item-title">{product.title}</p>
    </div>
  );
}

export default ProductImageTitle;