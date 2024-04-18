import styles from "./SidePanel.module.css";
import barChart from "../../assets/bar-chart-square-02.svg";
import checkDone from "../../assets/check-done-01.svg";
import chevronDown from "../../assets/chevron-down.svg";
import homeLine from "../../assets/home-line.svg";
import layersThree from "../../assets/layers-three-01.svg";
import lifeBuoy from "../../assets/life-buoy-01.svg";
import pieChart from "../../assets/pie-chart-03.svg";
import settings from "../../assets/settings-01.svg";
import users from "../../assets/users-01.svg";

export default function SidePanel() {
  return (
    <div className={styles.menu}>
      <ul className={styles.topItems}>
        <li>
          <img src={homeLine} alt="home" />
          Businnes Management
          <img src={chevronDown} alt="dropdown" />
        </li>

        <li>
          <img src={barChart} alt="barChart" />
          Insight&Analytics
          <img src={chevronDown} alt="dropdown" />
        </li>

        <li>
          <img src={layersThree} alt="layersThree" />
          Integration
          <img src={chevronDown} alt="dropdown" />
        </li>

        <li>
          <img src={checkDone} alt="checkDone" />
          Tasks
          <img src={chevronDown} alt="dropdown" />
        </li>

        <li>
          <img src={pieChart} alt="pieChart" />
          Reporting
        </li>
        <img src={chevronDown} alt="dropdown" />
        <li>
          <img src={users} alt="users" />
          Users
          <img src={chevronDown} alt="dropdown" />
        </li>
      </ul>
      <ul className={styles.bottomItems}>
        <li>
          <img src={lifeBuoy} alt="lifeBuoy" />
          Support
        </li>
        <li>
          <img src={settings} alt="settings" />
          Settings
        </li>
      </ul>
    </div>
  );
}
