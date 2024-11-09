'use client';
import Activitybar from "../ui/dashboard/activitybar/activitybar";
import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Strongest from "../ui/dashboard/strongest/strongest";
import Weakest from "../ui/dashboard/weakest/weakest";
import Userlider from "../ui/dashboard/userlider/userlider";
import Grouplider from "../ui/dashboard/grouplider/grouplider";
import Dropdown from "../ui/dashboard/dropdownbar/dropdown";

const cardData = [
  { title: "active user", description: "24/80" },
  { title: "Questions Answered", description: "3,298" },
  { title: "Av. Section Length", description: "2m 34s" },
  { title: "Starting Knowledge", description: "64%", percentage: 64 },
  { title: "Current Knowledge", description: "86%", percentage: 86 },
  { title: "Knowledge Gain", description: "+34%", percentage: 34 },
];

const Dashboard = () => {
  return (
    <div>
      <div className={styles.dropdown}>
       <Dropdown /> 
      </div>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            {cardData.map((item, index) => (
              <Card key={index} title={item.title} description={item.description} percentage={item.percentage} />
            ))}
          </div>
        
        </div>
        <div className={styles.side}>
        <Activitybar />
         
        </div>
       
      </div>
      <div className={styles.gridContainer}>
      <div className={styles.box1}><Weakest /></div>
            <div className={styles.box2}> <Strongest /></div>
            <div className={styles.box3}><Userlider /></div>
            <div className={styles.box4}><Grouplider /></div>
          </div>
    </div>
  );
};

export default Dashboard;
