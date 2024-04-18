import ChatScreen from "./components/ChatScreen/ChatScreen";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.left}>
        <LeftSideBar />
      </div>
      <div className={styles.right}>
        <ChatScreen />
      </div>
    </div>
  );
}

export default App;
