import styles from "./Profile.module.css";
import mockImage from "../../resources/img/mockimage.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCircleInfo,
  faClipboard,
  faClock,
  faEye,
  faEyeSlash,
  faGear,
  faMedal,
  faSquarePen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import medalPlaceholder from "../../resources/img/MedalPlaceholder.svg";
import EventCard from "../EventCard/EventCard";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";
import placeholderImage from "../../resources/img/mockimage.jpeg";
import { getDashContent } from "../../utils/contexts/dashboardAction";
import Modal from "../Modal/Modal";
import { useTheme } from "../../utils/contexts/globalThemeContext";

const Profile = () => {
  //TODO: call api to change profile data
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
  const [eventData, setEventData] = useState({
    loading: false,
    error: false,
    events: [],
  });
  const [formData, setFormData] = useState({
    currentEmail: "",
    newEmail: "",
    fullname: "",
    image: "",
    currentPassword: "",
    newPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    error: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const maxMedals = 6;
  const medalsToShow = medalsMock.slice(0, maxMedals);

  const displayImage = image ? (
    <img src={image} alt="Imagem do evento" />
  ) : (
    <img src={mockImage} alt="Imagem de mock" />
  );

  // TODO: fetch events when user is NOT the owner
  // const fetchEventsUrl =
  //   "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/meuseventos";
  // const handleFetchEvents = () => {
  //   setEventData((prevData) => ({ ...prevData, loading: true, error: false }));

  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     fetch(fetchEventsUrl, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token,
  //       },
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Erro na requisição");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const filteredEvents = data.filter(
  //           (event: { isOwner: boolean }) => event.isOwner === false
  //         );
  //         setEventData((prevData) => ({
  //           ...prevData,
  //           events: filteredEvents,
  //           loading: false,
  //         }));
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setEventData((prevData) => ({
  //           ...prevData,
  //           error: true,
  //           loading: false,
  //         }));
  //       });
  //   } else {
  //     setEventData((prevData) => ({
  //       ...prevData,
  //       error: true,
  //       loading: false,
  //     }));
  //   }
  // };

  //fetch events
  const fetchEventsUrl =
    "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos";
  const handleFetchEvents = () => {
    setEventData((prevData) => ({ ...prevData, loading: true, error: false }));

    const token = localStorage.getItem("token");

    if (token) {
      fetch(fetchEventsUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na requisição");
          }
          return response.json();
        })
        .then((data) => {
          setEventData((prevData) => ({
            ...prevData,
            events: data,
            loading: false,
          }));
        })
        .catch((error) => {
          console.error(error);
          setEventData((prevData) => ({
            ...prevData,
            error: true,
            loading: false,
          }));
        });
    } else {
      setEventData((prevData) => ({
        ...prevData,
        error: true,
        loading: false,
      }));
    }
  };

  const { setCurrentContent, setCurrentEvent, currentContent } =
    getDashContent();

  const handleSwitchContext = (selectedEvent: any) => {
    if (selectedEvent) {
      setCurrentEvent(selectedEvent);
      setCurrentContent("event-details");
    }
  };

  useEffect(() => {
    setCurrentContent("profile");
    handleFetchEvents();
  }, [currentContent]);

  //portal control
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //password toggles
  const toggleShowCurrentPassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showCurrentPassword: !prevData.showCurrentPassword,
    }));
  };

  const toggleShowNewPassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showNewPassword: !prevData.showNewPassword,
    }));
  };

  const { currentTheme } = useTheme();
  const svgStyle = currentTheme == "light" ? "#000" : "#FFF";

  return (
    <>
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <button onClick={closeModal} className={styles.modalclosebutton}>
            X
          </button>
          <div className={styles.modalfullcontent}>
            <div className={styles.modalinfo}>
              <div className={styles.userimageinfo}>
                {displayImage}
                <FontAwesomeIcon
                  icon={faSquarePen}
                  style={{ color: "#6f9200" }}
                />
              </div>
              <div className={styles.usernameinfo}>
                <h2>{username}</h2>
                <FontAwesomeIcon
                  icon={faSquarePen}
                  style={{ color: "#6f9200" }}
                />
              </div>
            </div>
            <div className={styles.fieldgroup}>
              <div
                className={`${styles.inputContainer} ${styles.labelaboveinput}`}
              >
                <label className={styles.profilelabel} htmlFor="currentEmail">
                  E-mail atual
                </label>
                <input
                  className={
                    formData.error ? styles.errorformfield : styles.formfield
                  }
                  type="email"
                  id="currentEmail"
                  placeholder=" "
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentEmail: e.target.value,
                    })
                  }
                />
              </div>
              <div
                className={`${styles.inputContainer} ${styles.labelaboveinput}`}
              >
                <label className={styles.profilelabel} htmlFor="newEmail">
                  Novo e-mail
                </label>
                <input
                  className={
                    formData.error ? styles.errorformfield : styles.formfield
                  }
                  type="email"
                  id="newEmail"
                  placeholder=" "
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      newEmail: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className={styles.fieldgroup}>
              <div
                className={`${styles.inputContainer} ${styles.labelaboveinput}`}
              >
                <label className={styles.signuplabel} htmlFor="currentPassword">
                  Senha atual
                </label>
                <div className={styles.passwordContainer}>
                  <input
                    className={
                      formData.error ? styles.errorformfield : styles.formfield
                    }
                    type={formData.showCurrentPassword ? "text" : "password"}
                    id="currentPassword"
                    value={formData.currentPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentPassword: e.target.value,
                      })
                    }
                  />
                  <div
                    className={styles.iconContainer}
                    onClick={toggleShowCurrentPassword}
                  >
                    {formData.showCurrentPassword ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ color: svgStyle }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className={styles.eyeIcon}
                        style={{ color: svgStyle }}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`${styles.inputContainer} ${styles.labelaboveinput}`}
              >
                <label className={styles.signuplabel} htmlFor="newPassword">
                  Nova senha
                </label>
                <div className={styles.passwordContainer}>
                  <input
                    className={
                      formData.error ? styles.errorformfield : styles.formfield
                    }
                    type={formData.showNewPassword ? "text" : "password"}
                    id="newPassword"
                    value={formData.newPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        newPassword: e.target.value,
                      })
                    }
                  />
                  <div
                    className={styles.iconContainer}
                    onClick={toggleShowNewPassword}
                  >
                    {formData.showNewPassword ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ color: svgStyle }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className={styles.eyeIcon}
                        style={{ color: svgStyle }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
      <div className={styles.fullcontent}>
        <div className={styles.mainsection}>
          <div className={styles.profileHeader}>
            {displayImage}
            <div className={styles.profileName}>
              <div className={styles.nameContainer}>
                <h1>{username} </h1>
                <div className={styles.lvlcard}>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#6f9200" }} />
                  <h3>Nvl 1000</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardssection}>
            <div className={styles.maincard}>
              <FontAwesomeIcon icon={faMedal} style={{ color: "#669f2d" }} />
              <h3>Recompensas</h3>
            </div>
            <div className={styles.maincard} onClick={openModal}>
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
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  style={{ color: "#FFF" }}
                />
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
        <div className={styles.eventshistory}>
          <div className={styles.mainsection}>
            <div className={styles.historyheader}>
              <div className={styles.historytitle}>
                <FontAwesomeIcon icon={faClock} style={{ color: "#292525" }} />
                <h1>Histórico de eventos</h1>
              </div>
            </div>
            {eventData.loading ? (
              <ClipLoader
                color={"#000"}
                loading={true}
                size={100}
                cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <div
                className={`${styles.eventcardssection} ${styles["events-container"]}`}
              >
                {eventData.events.map((event: any) => (
                  <EventCard
                    eventInfo={{
                      title: event.titulo,
                      location: event.local,
                      date: event.data,
                      category:
                        event.tipo == "CONSERVACAO_DE_ESPECIES"
                          ? "CONSERVAÇÃO"
                          : event.tipo == "CONSCIENTIZACAO_E_EDUCACAO"
                          ? "CONSCIENTIZAÇÃO"
                          : event.tipo,
                      image: event.image
                        ? `data:image/png;base64,${event.image}`
                        : placeholderImage,
                    }}
                    clickAction={() => handleSwitchContext(event)}
                    key={event.id}
                  />
                ))}

                {eventData.events.length < 1 && (
                  <h4>Nenhum evento encontrado.</h4>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
