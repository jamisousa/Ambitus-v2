import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ParticipantsList.module.css";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import mockImage from "../../resources/img/mockimage.jpeg";

const ParticipantsList = (props: any) => {
  const numberOfParticipants = props.participantsInfo.length;

  return (
    <div className={styles.fullsection}>
      <div className={styles.participantstitle}>
        <h2>Participantes</h2>
        <div className={styles.participantsnumber}>
          <FontAwesomeIcon icon={faUsers} style={{ color: "#292525" }} />
          <h3>{numberOfParticipants}</h3>
        </div>
      </div>
      {props.participantsInfo.map((p: any) => {
        return (
          <div key={p.length}>
            <div className={styles.participantsheader}></div>
            <div className={styles.participantstiles}>
              <div className={styles.participantCard}>
                <img src={p.image ? p.image : mockImage} />
                <div className={styles.participantinfo}>
                  <h3>{p.nome}</h3>
                  <div
                    className={styles.greenroundedcard}
                    style={{ fontSize: "0.95em" }}
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#6f9200" }}
                    />
                    <h3>Nvl {p.nivel}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParticipantsList;
