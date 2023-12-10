import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ParticipantsList.module.css";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import mockImage from "../../resources/img/mockimage.jpeg";
import mockImageAltText from "../../resources/img/mockimagealttext.jpeg";

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
        const imageSource = p.image ? p.image : mockImage;
        const altText = p.image
          ? `Imagem de ${p.nome}`
          : `Mock de imagem para ${p.nome}`;

        return (
          <div key={p.length}>
            <div className={styles.participantsheader}></div>
            <div className={styles.participantstiles}>
              <div className={styles.participantCard}>
                <img
                  src={imageSource}
                  alt={altText}
                  onError={(e) => {
                    e.currentTarget.src = mockImageAltText;
                    e.currentTarget.alt = `Mock de imagem para ${p.nome}`;
                  }}
                />
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
