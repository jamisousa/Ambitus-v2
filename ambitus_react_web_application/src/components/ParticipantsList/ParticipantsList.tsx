import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ParticipantsList.module.css";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import mockImage from "../../resources/img/mockimage.jpeg";

const ParticipantsList = () => {
  return (
    <div className={styles.fullsection}>
      <div className={styles.participantsheader}>
        <h2>Participantes</h2>
        <div className={styles.participantsnumber}>
          <FontAwesomeIcon icon={faUsers} style={{ color: "#292525" }} />
          <h3>0</h3>
        </div>
      </div>
      <div className={styles.participantstiles}>
        <div className={styles.participantCard}>
          <img src={mockImage} />
          <div className={styles.participantinfo}>
            <h3>Mock participant</h3>
            <div className={styles.greenroundedcard}>
              <FontAwesomeIcon icon={faStar} style={{ color: "#6f9200" }} />
              <h3>Nvl, nível</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsList;
