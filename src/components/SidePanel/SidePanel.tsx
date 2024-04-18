import styles from "./SidePanel.module.css";

export default function SidePanel() {
  return (
    <div className={styles.menu}>
      <ul className={styles.topItems}>
        <li>Businnes Management</li>
        <li>Insight&Analytics</li>
        <li>Tasks</li>
        <li>Reporting</li>
        <li>Users</li>
      </ul>
      <ul className={styles.bottomItems}>
        <li>Support</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
