// MainLogo.jsx

import { chaiLogo } from "../../assets/images";
import styles from './layout.module.scss';

const MainLogo = ({ className = '' }) => {
  return (
    <div className={`${styles['main-logo']} ${styles[className]}`}>
      <img src={chaiLogo} alt="brand logo" />
    </div>
  );
}

export default MainLogo;