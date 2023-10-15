import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChipProps } from "../../types/ChipType";
import styles from "./Chip.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Chip = (props: ChipProps) => {
  const classControl = props.showBackground
    ? `${styles.chipsection} ${styles.chipbackground}`
    : styles.chipsection;

  return (
    <div className={classControl}>
      <button onClick={props.clickAction} className={styles.chipbutton}>
        {props.title}
        {props.showCancelIcon && (
          <FontAwesomeIcon icon={faXmark} style={{ color: "#343941" }} />
        )}
      </button>
    </div>
  );
};

export default Chip;
