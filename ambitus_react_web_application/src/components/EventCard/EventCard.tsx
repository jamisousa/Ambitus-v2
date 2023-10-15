import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EventCardProps } from "../../types/EventCardType";
import styles from "./EventCard.module.css";
import {
  faCalendarMinus,
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const EventCard = (props: EventCardProps) => {
  return (
    <div className={styles.fullsection}>
      <div className={styles.cardcontent} onClick={props.clickAction}>
        <div className={styles.cardimage}>
          <img src={props.eventInfo.image} />
        </div>
        <div className={styles.cardinformation}>
          <div className={styles.cardtitle}>
            <h2>{props.eventInfo.title}</h2>
          </div>
          <div className={styles.cardlocation}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#292525" }}
            />
            <h4>{props.eventInfo.location}</h4>
          </div>
          <div className={styles.carddate}>
            <FontAwesomeIcon
              icon={faCalendarMinus}
              style={{ color: "#292525" }}
            />
            <h4>{props.eventInfo.date}</h4>
          </div>
          <div className={styles.categorycard}>
            <h3>{props.eventInfo.category}</h3>
          </div>
        </div>
        <div className={styles.cardchevron}>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#9ab34d" }} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
