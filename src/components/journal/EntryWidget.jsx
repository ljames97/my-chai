// EntryWidget.jsx

import { useNavigate } from 'react-router-dom';
import styles from './journal.module.scss';

/**
 * Displays a preview of a journal entry.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.journalEntry - The journal entry object.
 * @returns {JSX.Element} A clickable widget displaying journal entry information.
 */
const EntryWidget = ({ journalEntry }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/journal/${journalEntry.path}`);
  }

  return (
    <div onClick={handleClick} className={styles['journal-entry-widget']}>
      <div className={styles['journal-entry-header']}>
        <div className={styles['cover-photo-container']}>
          <img src={journalEntry.coverImage}/>
        </div>
        <div className={styles['text-overlay']}>
          <h3>{journalEntry.title}</h3>
          <p>{journalEntry.date}</p>
        </div>
      </div>
      <div className={styles['main-text']}>
        <p>{journalEntry.mainText[0]}</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default EntryWidget;