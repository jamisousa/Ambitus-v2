import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./EventsList.module.css";
import {
  faCalendarCheck,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";
import { SetStateAction, useState, useEffect } from "react";
import Chip from "../Chip/Chip";
import mockImage from "../../resources/img/mockimage.jpeg";
import EventCard from "../EventCard/EventCard";
import placeholderImage from "../../resources/img/lightAmbitusName-compressed.svg";
import { getDashContent } from "../../utils/contexts/dashboardAction";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";

const EventsList = () => {
  const { currentTheme } = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [isChipSelected, setIsChipSelected] = useState(false);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [eventData, setEventData] = useState({
    loading: false,
    error: false,
    events: [],
  });

  const searchHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
  };

  const handleFetchSearchEvents = (searchValue: string) => {
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
          const filteredEvents = data.filter((event: any) =>
            event.titulo.toLowerCase().includes(searchValue.toLowerCase())
          );

          setEventData((prevData) => ({
            ...prevData,
            events: filteredEvents,
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

  function formatCategoryString(category: string): string {
    const formattedCategory = category
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, "_")
      .toUpperCase();

    return formattedCategory;
  }

  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const chipHandle = (chipTitle: string) => {
    let formattedChipTitle = "";
    if (chipTitle == "Conservação") {
      formattedChipTitle = "CONSERVACAO_DE_ESPECIES";
    } else if (chipTitle == "Conscientização") {
      formattedChipTitle = "CONSCIENTIZACAO_E_EDUCACAO";
    } else {
      formattedChipTitle = formatCategoryString(chipTitle);
    }

    setSelectedChip(formattedChipTitle);
    handleFetchEventsByType(formattedChipTitle);
  };

  const { setCurrentContent, setCurrentEvent, currentEvent } = getDashContent();

  const handleSwitchContext = (selectedEvent: any) => {
    if (selectedEvent) {
      setCurrentEvent(selectedEvent);
      setCurrentContent("event-details");
    }
  };

  //style
  const textStyle =
    currentTheme === "light" ? styles.whitetext : styles.darktext;

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

  useEffect(() => {
    setCurrentContent("events");

    if (searchValue) {
      handleFetchSearchEvents(searchValue);
    } else {
      handleFetchEvents();
    }
  }, [searchValue]);

  //fetch events by category - type
  const handleFetchEventsByType = (selectedType: string | null) => {
    setEventData((prevData) => ({
      ...prevData,
      loading: true,
      error: false,
    }));

    const token = localStorage.getItem("token");
    const fetchEventsByTypeUrl = `http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/${selectedType}`;

    if (token) {
      fetch(fetchEventsByTypeUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
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

  return (
    <div className={`${styles.fullsection} ${textStyle}`}>
      <div className={styles.mainsection}>
        <h1>Eventos</h1>
        <div className={styles.cardssection}>
          <div className={styles.maincard}>
            <FontAwesomeIcon icon={faClipboard} style={{ color: "#669f2d" }} />
            <h3>Meus Eventos</h3>
          </div>
          <div className={styles.maincard}>
            <FontAwesomeIcon
              icon={faCalendarCheck}
              style={{ color: "#669f2d" }}
            />
            <h3>Minhas inscrições</h3>
          </div>
        </div>

        <div className={styles.searchbarsection}>
          <SearchBar searchAction={searchHandler} />
        </div>

        <div className={styles.chipsection}>
          <Chip
            title={"Reflorestamento"}
            clickAction={() => chipHandle("Reflorestamento")}
            isSelected={selectedChips.includes("REFLORESTAMENTO")}
            showCancelIcon={selectedChips.includes("REFLORESTAMENTO")}
            showBackground={selectedChips.includes("REFLORESTAMENTO")}
          />
          <Chip
            title={"Reciclagem"}
            clickAction={() => chipHandle("Reciclagem")}
            isSelected={selectedChips.includes("RECICLAGEM")}
            showCancelIcon={selectedChips.includes("RECICLAGEM")}
            showBackground={selectedChips.includes("RECICLAGEM")}
          />
          <Chip
            title={"Limpeza de ambientes"}
            clickAction={() => chipHandle("Limpeza de ambientes")}
            isSelected={selectedChips.includes("LIMPEZA_DE_AMBIENTES")}
            showCancelIcon={selectedChips.includes("LIMPEZA_DE_AMBIENTES")}
            showBackground={selectedChips.includes("LIMPEZA_DE_AMBIENTES")}
          />
          <Chip
            title={"Conscientização"}
            clickAction={() => chipHandle("Conscientização")}
            isSelected={selectedChips.includes("CONSCIENTIZACAO")}
            showCancelIcon={selectedChips.includes("CONSCIENTIZACAO")}
            showBackground={selectedChips.includes("CONSCIENTIZACAO")}
          />
          <Chip
            title={"Conservação"}
            clickAction={() => chipHandle("Conservação")}
            isSelected={selectedChips.includes("CONSERVACAO")}
            showCancelIcon={selectedChips.includes("CONSERVACAO")}
            showBackground={selectedChips.includes("CONSERVACAO")}
          />
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
            className={`${styles.cardssection} ${styles["events-container"]}`}
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

            {eventData.events.length < 1 && <h4>Nenhum evento encontrado.</h4>}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsList;
