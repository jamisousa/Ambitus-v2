import styles from "./EventDetails.module.css";
import mockImage from "../../resources/img/mockimage.jpeg";
import {
  faLocationDot,
  faCalendarMinus,
  faChevronLeft,
  faCheck,
  faCircleUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDashContent } from "../../utils/contexts/dashboardAction";

const EventDetails = () => {
  //TODO: change button state if user is already subscribed or not
  const { setCurrentContent } = getDashContent();

  const handleContext = () => {
    setCurrentContent("events");
  };
  return (
    <div className={styles.fullcontent}>
      <div className={styles.maincontent}>
        <div className={styles.header}>
          <h3>DETALHES DO EVENTO</h3>
          <button onClick={handleContext}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: "#6f9200" }}
            />
          </button>
        </div>
        <div className={styles.contentfirstblock}>
          <div className={styles.cardimage}>
            <img src={mockImage} />
          </div>
          <div className={styles.primaryinformation}>
            <div className={styles.primaryfirstblock}>
              <div className={styles.cardtitle}>
                <h2>Mock title</h2>
              </div>
              <div className={styles.cardlocation}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#292525" }}
                />
                <h4>Mock location</h4>
              </div>
              <div className={styles.carddate}>
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  style={{ color: "#292525" }}
                />
                <h4>10-10-2023</h4>
              </div>
              <div className={styles.cardauthor}>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  style={{ color: "#292525" }}
                />
                <h4>
                  Responsável: <span>Mock author</span>
                </h4>
              </div>
            </div>
            <div className={styles.primarysecondblock}>
              <button>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#6f9200" }} />
                Já inscrito
              </button>
              <div className={styles.bottombuttontext}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#6f9200" }} />
                <h5>Mock experience text here</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
