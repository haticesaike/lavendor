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

const menuItems = [
    { icon: homeLine, text: "Business Management", dropdownIcon: chevronDown },
    { icon: barChart, text: "Insights & Analytics", dropdownIcon: chevronDown },
    { icon: layersThree, text: "Integration", dropdownIcon: chevronDown },
    { icon: checkDone, text: "Tasks", dropdownIcon: chevronDown },
    { icon: pieChart, text: "Reporting", dropdownIcon: chevronDown },
    { icon: users, text: "Users", dropdownIcon: chevronDown },
];

const bottomItems = [
    { icon: lifeBuoy, text: "Support" },
    { icon: settings, text: "Settings" },
];

function SidePanel() {
    return (
        <div className={styles.menu}>
            <ul className={styles.topItems}>
                {menuItems.map((item, index) => (
                    <li key={index} className={styles.menuItem}>
                        <img src={item.icon} alt={item.text} className={styles.icon} />
                        <span className={styles.label}>{item.text}</span>
                        {item.dropdownIcon && (
                            <img
                                src={item.dropdownIcon}
                                alt="dropdown"
                                className={styles.dropdownIcon}
                            />
                        )}
                    </li>
                ))}
            </ul>
            <ul className={styles.bottomItems}>
                {bottomItems.map((item, index) => (
                    <li key={index} className={styles.menuItem}>
                        <img src={item.icon} alt={item.text} className={styles.icon} />
                        <span className={styles.label}>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidePanel;
