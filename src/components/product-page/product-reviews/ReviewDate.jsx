// ReviewDate.jsx

import { timeSince } from '../../global/globalUtils';
import styles from '../ProductPage.module.scss';

const ReviewDate = ({ date }) => {
  const datePosted = timeSince(date);

  return (
    <p className={styles['review-date']}>{datePosted}</p>
  )

}

export default ReviewDate;