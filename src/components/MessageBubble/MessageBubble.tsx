import styles from "./MessageBubble.module.css";
import avatarImg from "../../assets/favicon.svg";
interface MessageBubbleProps {
  text: string;
  sender: string;
}
const MessageBubble: React.FC<MessageBubbleProps> = ({ text,sender } ) => {
    const isUserSender =  sender === 'user';

    return (

        <div className={styles.messageRow}>

            <div className={`${styles.messageBubble} ${isUserSender ? styles.userBubble : ''}`}>
                <p className={styles.messageText}>{text}</p>
            </div>
            {!isUserSender && (
                <img src={avatarImg} alt={`${sender} Avatar`} className={styles.avatar}/>
            )}
        </div>
    );
};
export default MessageBubble;
