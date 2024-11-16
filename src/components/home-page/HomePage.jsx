// HomePage.jsx

import { contactUsCover, featuredImage, homePageCover } from '../../assets/images';
import { useTheme } from '../../store/ThemeContext';
import { products } from '../data';
import FeaturedCollection from './FeaturedCollection';
import JournalWidget from './JournalWidget';
import ReviewCarousel from './ReviewCarousel';
import TextImageFeature from './TextImageFeature';
import styles from './homePage.module.scss';
import { useNavigate } from 'react-router-dom';


/**
 * Renders the homepage for the store, featuring a cover image, promotional text, 
 * a collection of bestsellers, reviews, and additional features.
 * 
 * @component
 * @returns {JSX.Element} The homepage layout and content.
 */
const HomePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const bestSellers = products.filter(product => product.bestSeller === true);
  const featuredText = {
    header: 'Premium Loos Leaf Tea',
    subHeader: 'Chosen for flavour',
    main: 'Savor the rich, authentic taste of our premium loose leaf teas, carefully sourced from the finest tea gardens around the world. Whether you seek the boldness of black tea, the serenity of green tea, or the delicate notes of herbal blends, each cup offers a journey in flavor, aroma, and tradition.',
    button: 'DISCOVER'
  }
  const featuredText_2 = {
    header: 'Deluxe Teaware',
    subHeader: 'Elegant design',
    main: 'Discover our curated collection of artisanal teaware, designed to enhance every tea experience. From elegantly crafted teapots to precision infusers and delicate cups, our teaware merges form and function for both daily rituals and special occasions.',
    button: 'DISCOVER'
  }

  // Handle navigation to the full collection page.
  const handleShopNowClick = () => {
    navigate('/collection/all');
  }

  return (
    <div className={styles['home-page']}>
      <div className={styles['cover-photo-container']}>
        <img src={homePageCover}/>
        <button onClick={handleShopNowClick} className={`${styles['shop-now-btn']} ${isDarkMode ? styles['dark']: ''}`}>SHOP NOW</button>
      </div>
      <div className={`${styles['section-header']} ${isDarkMode ? styles['dark'] : ''}`}>
        <h3>Premium Loose Leaf Tea</h3>
        <p>Tea is our speciality. At My Chai, we've collected some of the finest premium loose leaf teas from sustainable sources.
          Discover a range of black, green, herbal and more.
        </p>
      </div>
      <FeaturedCollection header={'BESTSELLERS'} collection={bestSellers} />
      <TextImageFeature text={featuredText} image={featuredImage} buttonLink={'/collection/all'}/>
      <TextImageFeature text={featuredText_2} image={contactUsCover} buttonLink={'/collection/teaware'} />
      <ReviewCarousel />
      <JournalWidget />
    </div>
  )
}

export default HomePage;