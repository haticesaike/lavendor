import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import SidePanel from "../SidePanel/SidePanel";

function LeftSideBar() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <SidePanel />
    </div>
  );
}

export default LeftSideBar;
