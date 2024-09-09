// HomePage.jsx

import { coverPhoto, featuredImage, featuredImage_2 } from '../../assets/images';
import { products } from '../data';
import FeaturedCollection from './FeaturedCollection';
import Journal from './Journal';
import ReviewCarousel from './ReviewCarousel';
import TextImageFeature from './TextImageFeature';
import styles from './homePage.module.scss';

const HomePage = () => {
  const bestSellers = products.filter(product => product.bestSeller === true);
  const featuredText = {
    header: 'Premium Loos Leaf Tea',
    main: 'ahsjfhjasfhgagshdfgahsf',
    button: 'DISCOVER'
  }
  const featuredText_2 = {
    header: 'Deluxe Teaware',
    main: 'ahsjfhjasfhgagshdfgahsf',
    button: 'DISCOVER'
  }

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
      <FeaturedCollection header={'BESTSELLERS'} collection={bestSellers} />
      <TextImageFeature text={featuredText} image={featuredImage} />
      <TextImageFeature text={featuredText_2} image={featuredImage_2} />
      <ReviewCarousel />
      <Journal />
    </div>
  )
}

export default HomePage;