import styles from './grouplider.module.css';

const Grouplider = () => {
  const leaderboardData = [
    {
      name: 'Houston Facility',
      points: 52,
      percentage: 'user 97',
      position: 1,
      change: 'A',
      
    },
    {
      name: 'Test Group',
      points: 52,
      percentage: 'user 95',
      position: 2,
      change: '',
      
    },
    {
      name: 'Sales Leadership',
      points: 52,
      percentage: 'user 87',
      position: 3,
      change: 'A',
      
    },
    {
      name: 'Northeast region',
      points: 52,
     
      position: 4,
      change: 'A',
      
    },
  ];

  return (
    <div className={styles.leaderboard}>
      <h2 className={styles.title}>Groups Leaderboard</h2>
      <ul className={styles.list}>
        {leaderboardData.map((user) => (
          <li key={user.name} className={styles.listItem}>
            <div className={styles.userInfo}>
              <div>
                <h3 className={styles.userName}>{user.name}</h3>
                <p className={styles.userDetails}>
                  {user.points} Points - {user.percentage}% Correct
                </p>
              </div>
            </div>
            <div className={styles.position}>
              <span className={styles.rank}>{user.position}</span>
              <span
                className={`${styles.change} ${user.change === 'A' ? styles.up : styles.down}`}
              >
                {user.change}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grouplider;
