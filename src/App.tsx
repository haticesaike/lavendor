import "./App.css";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="leftSideBar ">
        <LeftSideBar />
        <SearchBar />
      </div>
      <div className="chatScreen">
        {" "}
        <ChatScreen />
      </div>
    </div>
  );
}

export default App;
