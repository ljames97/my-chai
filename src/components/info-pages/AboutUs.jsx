// AboutUs.jsx 

import { aboutUsCover } from "../../assets/images";
import InfoPage from "./InfoPage";

/**
 * Displays the "About Us" page with a featured image, header, and descriptive text.
 *
 * @component
 * @returns {JSX.Element} The "About Us" informational page.
 */
const AboutUs = () => {
  const mainText = [
    'At MyChai, we believe that tea is more than just a beverage—it’s an experience. Our passion for premium loose leaf teas drives us to source the finest ingredients from around the world, ensuring every cup delivers exceptional quality and flavor. Whether you’re a long-time tea lover or just discovering its richness, we strive to offer something special for everyone.',
  ]
  return (
    <InfoPage featuredImage={aboutUsCover} header={'About Us'} mainText={mainText}/>
  );
}

export default AboutUs;