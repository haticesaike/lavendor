import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default Navbar;
