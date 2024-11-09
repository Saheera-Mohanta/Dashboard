import styles from "./sidebar.module.css";
import { FaLightbulb } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { MdBolt, MdPeople } from "react-icons/md"; 
import { IoMdSettings } from "react-icons/io"; 
import MenuLink from "./menuLink/menuLink";
import Image from "next/image"; 

const menuItems = [
  {
    list: [
      {
        title: "Report",
        path: "/dashboard",
        icon: <BiSolidReport />,
      },
      {
        title: "Library",
        path: "/dashboard_project/app/ui/dashboard/activitybar",
        icon: <MdBolt />,
      },
      {
        title: "People",
        path: "dashboard/products",
        icon: <MdPeople />,
      },
      {
        title: "activities",
        path: "/dashboard/transactions",
        icon: <FiActivity />,
      },
    ],
  },
  {
    title: "Support",
    list: [
      {
        title: "get started",
        path: "/dashboard",
        icon: <FaLightbulb />,
      },
      {
        title: "setting",
        path: "dashboard/users",
        icon: <IoMdSettings />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/Font-tesla-logo.jpg" alt="Tesla logo" width={120} height={60} /> 
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      
      <div className={styles.logo}>
        <hr/>
        <Image src="/puja.jpg" alt="Tesla logo" width={120} height={60} className={styles.image} /> 
        <p>Saheera Mohanta</p>
        <p>saheerapuja123@gmail.com</p>
       </div>
    </div>
    
  );
};

export default Sidebar;
