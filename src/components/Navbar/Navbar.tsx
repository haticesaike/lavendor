import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={Logo} alt="logo" />
      <div className={styles.logoText}>LAVENDOR</div>
    </div>
  );
}

export default Navbar;
