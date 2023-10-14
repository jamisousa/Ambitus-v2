import { ChipProps } from "../../types/ChipType";
import styles from "./Chip.module.css";

const Chip = (props: ChipProps) => {
  const classControl = `props.showBackground ? ${styles.chipsection} ${styles.chipbackground} : ${styles.chipsection}`;
  return (
    <div className={styles.chipsection}>
      <button onClick={props.clickAction} className={classControl}>
        <h5>{props.title}</h5>
        {props.showCancelIcon ? <p>Cancel</p> : ""}
      </button>
    </div>
  );
};

export default Chip;
