// JournalEntry.jsx

import { useParams } from 'react-router-dom';
import { journalEntries } from '../data';
import styles from './journal.module.scss';
import { useTheme } from '../../store/ThemeContext';

/**
 * Displays the detailed content of a specific journal entry.
 *
 * @component
 * @returns {JSX.Element} The detailed view of a journal entry.
 */
const JournalEntry = () => {
  const { path } = useParams();
  const entry = journalEntries.find(entry => entry.path === path);
  const { isDarkMode } = useTheme();
  
  return (
    <div className={styles['journal-entry']}>
      <div className='entry-cover-photo'>
        <img src={entry.coverImage} alt='Cover image'/>
      </div>
      <div className={`${styles['entry-text']} ${isDarkMode ? styles['dark']: ''}`}>
        <h3>{entry.title}</h3>
        <p className={styles['entry-date']}>{entry.date}</p>
        <div className={styles['entry-main']}>
          {entry.mainText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JournalEntry;