// ReviewDate.jsx

import { timeSince } from '../../global/globalUtils';
import styles from '../ProductPage.module.scss';

/**
 * Displays review date
 *
 * @param {Object} props - Component properties.
 * @param {string} props.date - The date of the review in a standard format (e.g., "2024-11-15").
 *
 * @returns {JSX.Element} The formatted time since the review date.
 */
const ReviewDate = ({ date }) => {
  const datePosted = timeSince(date);

  return (
    <p className={styles['review-date']}>{datePosted}</p>
  )
}

export default ReviewDate;