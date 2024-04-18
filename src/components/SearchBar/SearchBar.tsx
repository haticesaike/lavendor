import { MdOutlineSearch } from "react-icons/md";
import { TextInput, rem } from "@mantine/core";
import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <TextInput
        className={styles.searchBarInput}
        style={{
          width: "85%",
          height: rem(40),
        }}
        mt="md"
        placeholder="Search"
        rightSectionPointerEvents="none"
        leftSection={
          <MdOutlineSearch style={{ width: rem(20), height: rem(20) }} />
        }
      />
    </div>
  );
}

export default SearchBar;
