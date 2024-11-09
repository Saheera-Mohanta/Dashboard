
import styles from './activitybar.css';

const Activitybar = () => {
  const data = [
    { month: 'JAN', value:80 ,Number:100},
    { month: 'FEB', value:100 },
    { month: 'MAR', value:110  },
    { month: 'APR', value:170 },
    { month: 'MAY', value:180  },
    { month: 'JUN', value:150 },
    { month: 'JUL', value:175 },
    { month: 'AUG', value: 70},
    { month: 'SEP', value: 185 },
    { month: 'OCT', value: 170 },
    { month: 'NOV', value: 190 },
    { month: 'DEC', value: 200 },
  ];

  return (
    <div className="container">
    <div className="headbar">
      <div>Activity</div>
      <div>
      <select className="dropdown">
          <option value="All">Month</option>
          <option value="Someone">Someone</option>
          <option value="Another">Another</option>
        </select>
      </div>
      </div>
      <div className="chart">
        {data.map((item, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${item.value}px`,
              
              width: '10px',
              backgroundColor: 'royalblue',
              marginRight: '1px',
            }}
          >
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="months">
        {data.map((item, index) => (
          <span key={index} className="month">
            {item.month}
          </span>
        ))}
      </div>
    </div>
  );
};


export default Activitybar;
