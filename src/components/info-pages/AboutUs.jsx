// AboutUs.jsx 

import { aboutUsCover } from "../../assets/images";
import InfoPage from "./InfoPage";
import styles from './infoPages.module.scss';

const AboutUs = () => {
  const mainText = [
    'At MyChai, we believe that tea is more than just a beverage—it’s an experience. Our passion for premium loose leaf teas drives us to source the finest ingredients from around the world, ensuring every cup delivers exceptional quality and flavor. Whether you’re a long-time tea lover or just discovering its richness, we strive to offer something special for everyone.',
    'We’re committed to bringing you tea that’s simple, authentic, and unforgettable. Welcome to MyChai- where every sip tells a story.'
  ]
  return (
    <InfoPage featuredImage={aboutUsCover} header={'About Us'} mainText={mainText}/>
  );
}

export default AboutUs;