// Journal.jsx

import { journalEntries } from "../data";
import EntryWidget from "./EntryWidget";
import styles from './journal.module.scss';

/**
 * Displays a collection of journal entries as a grid of widgets.
 *
 * @component
 * @returns {JSX.Element} The journal page with a grid of entry widgets.
 */
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