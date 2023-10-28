import styles from "./Profile.module.css";
import mockImage from "../../resources/img/mockimage.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCircleInfo,
  faClipboard,
  faGear,
  faMedal,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import medalPlaceholder from "../../resources/img/MedalPlaceholder.svg";

const Profile = () => {
  //TODO: remove this after api call
  const medalsMock = [
    { title: "Iniciante Ambiental", medalIcon: medalPlaceholder },
    { title: "Ativista Compromissado", medalIcon: medalPlaceholder },
    { title: "Ecológico Experiente", medalIcon: medalPlaceholder },
    { title: "Protetor da Floresta", medalIcon: medalPlaceholder },
    { title: "Ecológico Experiente", medalIcon: medalPlaceholder },
    { title: "Explorador Nato", medalIcon: medalPlaceholder },
    { title: "Consciente sempre", medalIcon: medalPlaceholder },
    { title: "Reciclagem de respeito", medalIcon: medalPlaceholder },
  ];

  const image = localStorage.getItem("user_image");
  const username = localStorage.getItem("user_name");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const maxMedals = 6;
  const medalsToShow = medalsMock.slice(0, maxMedals);

  const displayImage = image ? (
    <img src={image} alt="Imagem do evento" />
  ) : (
    <img src={mockImage} alt="Imagem de mock" />
  );

  return (
    <div className={styles.fullcontent}>
      <div className={styles.mainsection}>
        <div className={styles.profileHeader}>
          {displayImage}
          <div className={styles.profileName}>
            <div className={styles.nameContainer}>
              <h1>{username} </h1>
              <div className={styles.lvlcard}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#6f9200" }} />
                <h3>Nvl 1</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardssection}>
          <div className={styles.maincard}>
            <FontAwesomeIcon icon={faMedal} style={{ color: "#669f2d" }} />
            <h3>Recompensas</h3>
          </div>
          <div className={styles.maincard}>
            <FontAwesomeIcon icon={faGear} style={{ color: "#669f2d" }} />
            <h3>Configurações</h3>
          </div>
        </div>
      </div>
      <div className={styles.medalssection}>
        <div className={styles.mainsection}>
          <div className={styles.medalsheader}>
            <div className={styles.medalstitle}>
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFF" }} />
              <h1>Medalhas</h1>
            </div>
            <div className={styles.medalinfoicon}>
              <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#FFF" }} />
            </div>
          </div>
          <div className={styles.medalicons}>
            {medalsMock.map((m, index) => (
              <div
                className={`${styles.medal} ${
                  index >= maxMedals ? styles["hidden-medal"] : ""
                }`}
                key={index}
              >
                <img src={m.medalIcon} alt={m.title} />
                <h3>{m.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
