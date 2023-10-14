import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./EventsList.module.css";
import {
  faCalendarCheck,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";
import { ChangeEvent, MouseEvent, useState } from "react";
import Chip from "../Chip/Chip";

const EventsList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isChipSelected, setIsChipSelected] = useState(false);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //TODO: search by name and update events listing.
    setSearchValue(e.target.value);
  };

  const chipHandle = (e: MouseEvent<HTMLElement>) => {
    //TODO: search event by chip name.
  };

  return (
    <div className={styles.fullsection}>
      <div className={styles.mainsection}>
        <h1>Eventos</h1>
        <div className={styles.cardssection}>
          <div className={styles.maincard}>
            <FontAwesomeIcon icon={faClipboard} style={{ color: "#669f2d" }} />
            <h3>Meus Eventos</h3>
          </div>
          <div className={styles.maincard}>
            <FontAwesomeIcon
              icon={faCalendarCheck}
              style={{ color: "#669f2d" }}
            />
            <h3>Minhas inscrições</h3>
          </div>
        </div>

        <div className={styles.searchbarsection}>
          <SearchBar searchAction={searchHandler} />
        </div>

        <div className={styles.chipsection}>
          <Chip
            title={"Reflorestamento"}
            clickAction={chipHandle}
            showCancelIcon={isChipSelected}
            showBackground={isChipSelected}
          />
          <Chip
            title={"Reciclagem"}
            clickAction={chipHandle}
            showCancelIcon={isChipSelected}
            showBackground={isChipSelected}
          />
          <Chip
            title={"Limpeza de ambientes"}
            clickAction={chipHandle}
            showCancelIcon={isChipSelected}
            showBackground={isChipSelected}
          />
          <Chip
            title={"Conscientização"}
            clickAction={chipHandle}
            showCancelIcon={isChipSelected}
            showBackground={isChipSelected}
          />
          <Chip
            title={"Conservação"}
            clickAction={chipHandle}
            showCancelIcon={isChipSelected}
            showBackground={isChipSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsList;
