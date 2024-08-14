// ReviewDate.jsx

import styles from '../ProductPage.module.scss';

const ReviewDate = ({ date }) => {
  const datePosted = timeSince(date);

  return (
    <p className={styles['review-date']}>{datePosted}</p>
  )

}

export default ReviewDate;

// in global utils

const parseDate = (ukDate) => {
  const [day, month, year] = ukDate.split('/');
  return new Date(`${month}/${day}/${year}`);
}

const timeSince = (date) => {
  const parsedDate = parseDate(date);
  const now = new Date();
  const reviewDate = new Date(parsedDate);
  const diffInSeconds = Math.floor((now - reviewDate) / 1000);

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 }
  ];

  for (let unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval > 1 ? 's' : ''} ago`;
    }
  }
  
  return 'Just now';
}