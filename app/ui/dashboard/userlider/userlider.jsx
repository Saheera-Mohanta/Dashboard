import styles from './userlider.module.css';

const Userlider = () => {
  const leaderboardData = [
    {
      name: 'Jesse Thomas',
      points: 637,
      percentage: 98,
      position: 1,
      change: 'A',
      image: '/puja.jpg', // Add the image source for each user
    },
    {
      name: 'Thisal Mathiyazhagan',
      points: 637,
      percentage: 89,
      position: 2,
      change: 'V',
      image: '/raja.jpg', // Add the image source for each user
    },
    {
      name: 'Helen Chuang',
      points: 637,
      percentage: 88,
      position: 3,
      change: 'A',
      image: '/rohit.jpg', // Add the image source for each user
    },
    {
      name: 'Lura Silverman',
      points: 637,
      percentage: 0,
      position: 4,
      change: 'A',
      image: '/rani.jpg', // Add the image source for each user
    },
  ];

  return (
    <div className={styles.leaderboard}>
      <h2 className={styles.title}>User Leaderboard</h2>
      <ul className={styles.list}>
        {leaderboardData.map((user) => (
          <li key={user.name} className={styles.listItem}>
            <div className={styles.userInfo}>
              <img src={user.image} className={styles.userImage} />
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

export default Userlider;
