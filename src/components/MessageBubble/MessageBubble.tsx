import styles from "./MessageBubble.module.css";
import avatarImg from "../../assets/logo.svg";
interface MessageBubbleProps {
  text: string;
}
const MessageBubble: React.FC<MessageBubbleProps> = ({ text }) => {
  return (
    <div className={styles.messageBubble}>
      <img src={avatarImg} alt="User Avatar" className={styles.avatar} />
      <p className={styles.messageText}>{text}</p>
    </div>
  );
};
export default MessageBubble;
