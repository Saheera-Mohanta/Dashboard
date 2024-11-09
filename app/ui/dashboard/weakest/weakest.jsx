import styles from './weakest.module.css';

const WeakestTopics = () => {
  const topics = [
    {
      image: '/food.jpg',
      title: 'Food Safety',
      percentage: 74,
    },
    {
      image: 'medi.jpg',
      title: 'Compliance Basics Procedures',
      percentage: 52,
    },
    {
      image: 'net.jpg',
      title: 'Company Networking',
      percentage: 36,
    },
  ];

  return (
    <div className={styles.weakestTopics}>
      <h2>Weakest Topics</h2>
      <ul className={styles.ul}>
        {topics.map((topic, index) => (
          <li key={index}>
            <div className={styles.topicItem}>
              <img src={topic.image} alt=""/>
              <div className={styles.pro}>
              <h3>{topic.title}</h3>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: `${topic.percentage}%` }}
                />
                </div>
              </div>
              <span>{topic.percentage}% Correct</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeakestTopics;
