import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import SidePanel from "../SidePanel/SidePanel";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./LeftSideBar.module.css";
import avatarW from "../../assets/avatar-w.svg";

function LeftSideBar() {
  const userInfoProps = {
    name: "Ari Espinoza",
    email: "espino@drafthouse.com",
    avatar: avatarW,
  };
  return (
    <div className={styles.leftSideBar}>
      <Navbar />
      <SearchBar />
      <SidePanel />
      <div className={styles.divider}></div>
      <UserInfo {...userInfoProps} />
    </div>
  );
}

export default LeftSideBar;
