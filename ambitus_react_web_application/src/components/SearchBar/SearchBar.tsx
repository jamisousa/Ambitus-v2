import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.css";
import { ChangeEvent, useState } from "react";
import { SearchBarType } from "../../types/SearchBarType";

const SearchBar = (props: { searchAction: SearchBarType }) => {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchBarInput}
        type="text"
        placeholder="Pesquisar evento"
        onBlur={props.searchAction}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#669f2d" }} />
    </div>
  );
};

export default SearchBar;
