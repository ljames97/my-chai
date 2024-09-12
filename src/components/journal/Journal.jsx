// Journal.jsx

import { journalEntries } from "../data";
import EntryWidget from "./EntryWidget";
import styles from './journal.module.scss';

const Journal = () => {
  return (
    <div className={styles['journal-page']}>
      {journalEntries.map((entry, index) => (
        <EntryWidget key={index} journalEntry={entry} />
      ))}
    </div>
  );
}

export default Journal;