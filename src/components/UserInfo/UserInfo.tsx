import styles from "./UserInfo.module.css";
import logOut from "../../assets/log-out.svg";

interface UserInfoProps {
  name: string;
  email: string;
  avatar: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, avatar }) => {
  return (
    <div className={styles.userInfo}>
      <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      <div className={styles.details}>
        <div className={styles.nameWithIcon}>
          <h5 className={styles.name}>{name}</h5>
          <img src={logOut} alt="Expand" className={styles.logOut} />
        </div>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
