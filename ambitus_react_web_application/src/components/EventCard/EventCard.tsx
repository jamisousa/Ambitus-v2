import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EventCardProps } from "../../types/EventCardType";
import styles from "./EventCard.module.css";
import {
  faCalendarMinus,
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import { getDashContent } from "../../utils/contexts/dashboardAction";

const EventCard = (props: EventCardProps) => {
  const { currentTheme } = useTheme();
  const { currentContent } = getDashContent();

  //style
  const textStyle =
    currentTheme === "light" ? styles.whitetext : styles.darktext;

  const svgStyle = currentTheme === "light" ? "#292525" : "#fefae0";

  const chevronStyle =
    currentContent === "profile"
      ? styles.cardchevroncompressed
      : styles.cardchevron;

  return (
    <div className={`${styles.fullsection} ${textStyle}`}>
      <div className={styles.cardcontent} onClick={props.clickAction}>
        <div className={styles.cardimage}>
          <img src={props.eventInfo.image} />
        </div>
        <div className={styles.cardinformation}>
          <div className={styles.cardtitle}>
            <h2>{props.eventInfo.title}</h2>
          </div>
          <div className={styles.cardlocation}>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: svgStyle }} />
            <h4>{props.eventInfo.location}</h4>
          </div>
          <div className={styles.carddate}>
            <FontAwesomeIcon
              icon={faCalendarMinus}
              style={{ color: svgStyle }}
            />
            <h4>{props.eventInfo.date}</h4>
          </div>
          <div className={styles.categorycard}>
            <h3>{props.eventInfo.category}</h3>
          </div>
        </div>
        <div className={chevronStyle}>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#9ab34d" }} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
