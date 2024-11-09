import styles from './strongest.module.css';

  const Strongest= () => {
    const topics = [
      {
        image: '/hoodi.jpg',  // Assumes this is in the public folder
        title: 'Covid Protocal',
        percentage: 74,
      },
      {
        image: '/key.jpg',  // Assumes this is in the public folder
        title: 'Cyber Security Basics',
        percentage: 52,
      },
      {
        image: '/grp.jpg',  // Assumes this is in the public folder
        title: 'Social Media Policies',
        percentage: 36,
      },
    ];
  
    return (
      <div className={styles.Topics}>
        <h2>Strongest Topics</h2>
        <ul className={styles.ul}>
          {topics.map((topic, index) => (
            <li key={index}>
              <div className={styles.topicItem}>
                <img src={topic.image} alt={topic.title} />
                <div className={styles.pro}>
                  <h3>{topic.title}</h3>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressBarFill}
                      style={{ width: `${topic.percentage}%` }}
                    />
                  </div>
                </div>
                <span className={styles.percentageLabel}>{topic.percentage}% Correct</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Strongest;
  
