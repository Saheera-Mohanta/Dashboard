import styles from'./navbar.module.css'
import { IoMdDownload } from "react-icons/io";

const Navbar = () => {
    return (
        <div className={styles.container}>
          <div className={styles.report}>
            Reports
          </div>
          <div className={styles.icons}>
          <IoMdDownload /> download
          </div>
        </div>
    )
    
  };
  
  export default Navbar;
  