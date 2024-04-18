import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import SidePanel from "../SidePanel/SidePanel";
import styles from "./LeftSideBar.module.css";

function LeftSideBar() {
  return (
    <div className={styles.leftSideBar}>
      <Navbar />
      <SearchBar />
      <SidePanel />
    </div>
  );
}

export default LeftSideBar;
