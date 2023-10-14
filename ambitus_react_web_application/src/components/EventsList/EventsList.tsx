import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./EventsList.module.css";
import {
  faCalendarCheck,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";
import { MouseEvent, SetStateAction, useState } from "react";
import Chip from "../Chip/Chip";

const EventsList = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isChipSelected, setIsChipSelected] = useState(false);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const searchHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
  };

  const chipHandle = (chipTitle: string) => {
    setSelectedChips([chipTitle]);
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
            clickAction={() => chipHandle("Reflorestamento")}
            isSelected={selectedChips.includes("Reflorestamento")}
            showCancelIcon={selectedChips.includes("Reflorestamento")}
            showBackground={selectedChips.includes("Reflorestamento")}
          />
          <Chip
            title={"Reciclagem"}
            clickAction={() => chipHandle("Reciclagem")}
            isSelected={selectedChips.includes("Reciclagem")}
            showCancelIcon={selectedChips.includes("Reciclagem")}
            showBackground={selectedChips.includes("Reciclagem")}
          />
          <Chip
            title={"Limpeza de ambientes"}
            clickAction={() => chipHandle("Limpeza de ambientes")}
            isSelected={selectedChips.includes("Limpeza de ambientes")}
            showCancelIcon={selectedChips.includes("Limpeza de ambientes")}
            showBackground={selectedChips.includes("Limpeza de ambientes")}
          />
          <Chip
            title={"Conscientização"}
            clickAction={() => chipHandle("Conscientização")}
            isSelected={selectedChips.includes("Conscientização")}
            showCancelIcon={selectedChips.includes("Conscientização")}
            showBackground={selectedChips.includes("Conscientização")}
          />
          <Chip
            title={"Conservação"}
            clickAction={() => chipHandle("Conservação")}
            isSelected={selectedChips.includes("Conservação")}
            showCancelIcon={selectedChips.includes("Conservação")}
            showBackground={selectedChips.includes("Conservação")}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsList;