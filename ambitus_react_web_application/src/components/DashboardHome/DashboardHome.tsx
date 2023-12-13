import { useEffect } from "react";
import {
  faCalendarCheck,
  faMedal,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DashboardHome.module.css";
import mockImage from "../../resources/img/mockimage.jpeg";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { override, pageOverride } from "../../utils/spinner/spinner";
import EventCard from "../EventCard/EventCard";
import { getDashContent } from "../../utils/contexts/dashboardAction";
import AchievementCarousel from "../AchievementCarousel/AchievementCarousel";

const DashboardHome = () => {
  const [eventData, setEventData] = useState({
    loading: false,
    error: false,
    events: [],
  });

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    level: "",
    medals: "",
  });

  const [pageLoading, setPageLoading] = useState(false);

  //username cut
  const username = userData.name || "";
  const space = username?.indexOf(" ");
  let usernameCut = "";

  if (username && space !== -1) {
    const cut = username.substring(0, space);
    usernameCut = cut;
  }

  const { setCurrentContent, setCurrentEvent } = getDashContent();

  const handleSwitchContext = (selectedEvent: any) => {
    if (selectedEvent) {
      setCurrentEvent(selectedEvent);
      setCurrentContent("event-details");
    }
  };

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

  //fetch user data

  const fetchUserDataUrl =
    "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/usuario/dados";
  const fetchUserData = () => {
    setPageLoading(true);
    const token = localStorage.getItem("token");

    if (token) {
      fetch(fetchUserDataUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            setPageLoading(false);
            throw new Error("Erro na requisição");
          }
          return response.json();
        })
        .then((data) => {
          setPageLoading(false);
          setUserData((prevData) => ({
            ...prevData,
            name: data.nome,
            email: data.email,
            medals: data.medalhas,
            level: data.nivel,
          }));
        })
        .catch((error) => {
          setPageLoading(false);
        });
    } else {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    handleFetchEvents();
    fetchUserData();
  }, []);

  return (
    <div className={styles.fullcontent}>
      <div className={styles.maincontent}>
        {pageLoading ? (
          <ClipLoader
            color={"#FFF"}
            loading={true}
            size={100}
            cssOverride={pageOverride}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <h1>Olá, {usernameCut ? usernameCut : username}</h1>
            <div className={styles.userlevel}>
              <div className={styles.lvlcard}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#6f9200" }} />
                <h3>Nvl {userData.level}</h3>
              </div>
              <h2>Continue assim!</h2>
            </div>
          </>
        )}
        <div className={styles.maincards}>
          <div className={styles.cardssection}>
            <div
              className={styles.maincard}
              onClick={() => {
                setCurrentContent("profile");
              }}
            >
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ color: "#669f2d" }}
              />
              <h3>Minhas inscrições</h3>
            </div>
            <div
              className={styles.maincard}
              onClick={() => {
                setCurrentContent("profile");
              }}
            >
              <FontAwesomeIcon icon={faMedal} style={{ color: "#669f2d" }} />
              <h3>Recompensas</h3>
            </div>
          </div>
        </div>

        <div className={styles.eventssection}>
          <h2 className={styles.nexteventstitle}>Seus próximos eventos</h2>
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
              className={`${styles.eventcardssection} ${styles["events-container"]} `}
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
                      : mockImage,
                  }}
                  clickAction={() => handleSwitchContext(event)}
                  key={event.id}
                />
              ))}

              {eventData.events.length < 1 &&
              !eventData.loading &&
              !pageLoading ? (
                <h4>Nenhum evento encontrado.</h4>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
      <div className={styles.achievementsection}>
        <div className={styles.maincontent}>
          <h2>Continue engajado para alcançar sua próxima medalha!</h2>
          <AchievementCarousel />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
