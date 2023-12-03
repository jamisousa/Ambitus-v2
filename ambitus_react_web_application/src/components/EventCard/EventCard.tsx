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
  const eventTitle =
    props.eventInfo.title.charAt(0) +
    props.eventInfo.title.slice(1).toLowerCase();

  const eventCategory =
    props.eventInfo.category.charAt(0) +
    props.eventInfo.category.slice(1).toLowerCase();

  //style
  const textStyle =
    currentTheme === "light" ? styles.whitetext : styles.darktext;

  const svgStyle = currentTheme === "light" ? "#2c2727" : "#fefae0";

  const chevronStyle =
    currentContent === "profile"
      ? styles.cardchevroncompressed
      : styles.cardchevron;

  return (
    <div className={`${styles.fullsection} ${textStyle}`}>
      <div className={styles.cardcontent} onClick={props.clickAction}>
        <div className={styles.cardimage}>
          <img src={props.eventInfo.image} draggable="false" />
        </div>
        <div className={styles.cardinformation}>
          <div className={styles.cardtitle}>
            <h2>{eventTitle}</h2>
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
            <h3>{eventCategory}</h3>
          </div>
        </div>
        <div className={chevronStyle}>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#2c2727" }} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
