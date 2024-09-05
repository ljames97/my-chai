// HomePage.jsx

import { coverPhoto } from '../../assets/images';
import { products } from '../data';
import FeaturedCollection from './FeaturedCollection';
import styles from './homePage.module.scss';

const HomePage = () => {
  const bestSellers = products.filter(product => product.bestSeller === true);
  return (
    <div className={styles['home-page']}>
      <div className={styles['cover-photo-container']}>
        <img src={coverPhoto}/>
        <button id={styles['shop-now']}>SHOP NOW</button>
      </div>
      <div className={styles['section-header']}>
        <h3>The Tea Specialists</h3>
        <p>Tea is out speciality. At My Chai, we've collected some of the finest premium loose leaf teas from sustainable sources.
          Discover a range of black, green, herbal and more.
        </p>
      </div>
      <FeaturedCollection header={'Bestsellers'} collection={bestSellers} />
    </div>
  )
}

export default HomePage;