import "./App.css";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

function App() {
  return (
    <div className="App">
      <div className="leftSideBar ">
        <LeftSideBar />
      </div>
      <div className="chatScreen">
        {" "}
        <ChatScreen />
      </div>
    </div>
  );
}

export default App;
