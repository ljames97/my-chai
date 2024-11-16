// Journal.jsx

import { journalCover } from '../../assets/images';
import styles from './homePage.module.scss';
import { useNavigate } from 'react-router-dom';

/**
 * A widget component that links to the journal section of the website.
 * Displays a cover image, title, description, and a call-to-action button.
 * 
 * @component
 * @returns {JSX.Element} The journal widget layout and content.
 */
const JournalWidget = () => {
  const navigate = useNavigate();

  /**
   * Handles navigation to the journal page when the "Read More" button is clicked.
   */
  const handleClick = () => {
    navigate('/journal')
  }
  
  return (
    <div className={styles['journal-widget']}>
      <div className={styles['journal-cover-container']}>
        <img src={journalCover}/>
      </div>
      <div className={styles['journal-cover-text']}>
        <h3>Our Journal</h3>
        <p>Visit out journal and discover articles on all things tea.</p>
        <button onClick={handleClick} className={styles['journal-button']}>Read More</button>
        </div>
    </div>
  );
}

export default JournalWidget;