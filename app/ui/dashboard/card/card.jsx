
import styles from './card.module.css';

const Card = ({ title, description, percentage }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {percentage !== undefined && (
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
          <span className={styles.percentageLabel}>{percentage}%</span>
        </div>
      )}
    </div>
  );
};

export default Card;
