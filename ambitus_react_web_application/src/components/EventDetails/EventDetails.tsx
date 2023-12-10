import styles from "./EventDetails.module.css";
import mockImage from "../../resources/img/mockimage.jpeg";
import {
  faLocationDot,
  faCalendarMinus,
  faChevronLeft,
  faCheck,
  faCircleUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDashContent } from "../../utils/contexts/dashboardAction";
import ParticipantsList from "../ParticipantsList/ParticipantsList";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";
import Modal from "../Modal/Modal";
import { useTheme } from "../../utils/contexts/globalThemeContext";

const EventDetails = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [participantsLoading, setParticipantsLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [participantsData, setParticipantsData] = useState([]);
  const { currentTheme } = useTheme();
  const { setCurrentContent } = getDashContent();

  let {
    id,
    image,
    titulo,
    descricao,
    local,
    data,
    organizador,
    tipo,
    cupom = { titulo: null, descricao: null },
  } = props.eventinfo;

  const handleContext = () => {
    setCurrentContent("events");
  };

  //portal control
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //get user events and check if they're already subscribed
  const getEventsUrl = `http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/meuseventos`;
  const handleFetchUserEvents = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      fetch(getEventsUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          setLoading(true);
          if (!response.ok) {
            setError(true);
            setLoading(false);
          }
          return response.json() as Promise<any>;
        })
        .then((data) => {
          const events = data;
          const hasEventWithId = events.some(
            (ev: { id: number }) => ev.id === id
          );

          if (hasEventWithId) {
            setIsSubscribed(true);
          } else {
            setIsSubscribed(false);
          }

          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  //subscribe
  const subscribeUrl = `http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/inscricao/${id}`;
  const handleSubscribe = () => {
    setButtonLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      fetch(subscribeUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            setError(true);
            setButtonLoading(false);
            setIsSubscribed(false);
          }
          return response.json() as Promise<any>;
        })
        .then((data) => {
          setIsSubscribed(true);
          handleFetchUserEvents();
          handleFetchParticipants();
          setButtonLoading(false);
        })
        .catch(() => {
          setError(true);
          handleFetchUserEvents();
          handleFetchParticipants();
          setButtonLoading(false);
        });
    } else {
      setError(true);
      setButtonLoading(false);
    }
  };

  //cancel subscription
  const cancelSubscriptionUrl = `http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/cancelarInscricao/${id}`;

  const handleCancelSubscription = () => {
    setButtonLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      fetch(cancelSubscriptionUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          setButtonLoading(true);
          if (!response.ok) {
            setError(true);
            setButtonLoading(false);
            closeModal();
          }
          return response.json() as Promise<any>;
        })
        .then((data) => {
          setIsSubscribed(false);
          closeModal();
          setButtonLoading(false);
          handleFetchUserEvents();
          handleFetchParticipants();
        })
        .catch(() => {
          setError(true);
          closeModal();
          setButtonLoading(false);
          handleFetchUserEvents();
          handleFetchParticipants();
        });
    } else {
      setError(true);
    }
  };

  //fetch participants
  const fetchParticipantsURL = `http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/participantes/${id}`;

  const handleFetchParticipants = () => {
    setParticipantsLoading(true);
    const token = localStorage.getItem("token");

    if (token) {
      fetch(fetchParticipantsURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          setParticipantsLoading(true);
          if (!response.ok) {
            setError(true);
            setParticipantsLoading(true);
          }
          return response.json() as Promise<any>;
        })
        .then((data) => {
          setParticipantsData(data.participantes);
          setParticipantsLoading(false);
        })
        .catch(() => {
          setError(true);
          setParticipantsLoading(false);
        });
      setParticipantsLoading(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setCurrentContent("event-details");
    handleFetchUserEvents();
    handleFetchParticipants();
  }, []);

  //style
  const textStyle =
    currentTheme === "light" ? styles.whitetext : styles.darktext;
  const svgStyle = currentTheme === "light" ? "#292525" : "#fefae0";

  return (
    <>
      {loading ? (
        <ClipLoader
          color={"#000"}
          loading={true}
          size={100}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          {isModalOpen && (
            <div className={styles.modal}>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <button
                  onClick={closeModal}
                  className={styles.modalclosebutton}
                >
                  X
                </button>
                <div className={styles.modalinfo}>
                  <h2>Cancelar inscrição</h2>
                </div>

                {loading ? (
                  <ClipLoader
                    color={"#000"}
                    loading={true}
                    size={100}
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <aside className={styles.modalaside}>
                    <p>
                      Clique em "confirmar" para cancelar sua inscrição no
                      evento.
                    </p>
                    <p>
                      <b>
                        Nota: Nível alcançado e medalhas conquistadas através da
                        inscrição no evento não serão recebidos.
                      </b>
                    </p>
                    <div className={styles.confirmcancel}>
                      <button onClick={handleCancelSubscription}>
                        <FontAwesomeIcon
                          icon={faX}
                          style={{ color: "#ff3332" }}
                        />
                        {buttonLoading ? (
                          <ClipLoader
                            color={"#6f9200"}
                            loading={true}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        ) : (
                          <h2>Confirmar</h2>
                        )}
                      </button>
                    </div>
                  </aside>
                )}
              </Modal>
            </div>
          )}

          <div className={`${styles.fullcontent} ${textStyle}`}>
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
              {/*first block of content (photo, title, description, location, author, button)*/}
              <div className={styles.contentfirstblock}>
                <div className={styles.cardimage}>
                  {image ? (
                    <img
                      src={`data:image/png;base64, ${image}`}
                      alt="Imagem do evento"
                    />
                  ) : (
                    <img
                      src={mockImage}
                      alt="Imagem de mock"
                      draggable="false"
                    />
                  )}
                </div>
                <div className={styles.primaryinformation}>
                  <div className={styles.primaryfirstblock}>
                    <div className={styles.cardtitle}>
                      <h1>{titulo}</h1>
                    </div>
                    <div className={styles.cardlocation}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: svgStyle }}
                      />
                      <h4>{local}</h4>
                    </div>
                    <div className={styles.carddate}>
                      <FontAwesomeIcon
                        icon={faCalendarMinus}
                        style={{ color: svgStyle }}
                      />
                      <h4>{data}</h4>
                    </div>
                    <div className={styles.cardauthor}>
                      <FontAwesomeIcon
                        icon={faCircleUser}
                        style={{ color: svgStyle }}
                      />
                      <h4>
                        Responsável: <span>{organizador.email}</span>
                      </h4>
                    </div>
                  </div>
                  <div className={styles.primarysecondblock}>
                    <button onClick={isSubscribed ? () => {} : handleSubscribe}>
                      {buttonLoading ? (
                        <ClipLoader
                          color={"#6f9200"}
                          loading={true}
                          size={20}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      ) : (
                        <>
                          {isSubscribed ? (
                            <div>
                              <FontAwesomeIcon
                                icon={faCheck}
                                style={{ color: "#6f9200" }}
                              />
                              Já inscrito
                            </div>
                          ) : (
                            <div>Inscrever-se</div>
                          )}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {/*TODO: add props for event rewards*/}
              {/*start description*/}
              <div className={styles.descriptionsection}>
                <div className={styles.descriptionbody}>
                  <h2>Descrição</h2>
                  <p>{descricao}</p>
                  <div className={styles.greenroundedcard}>
                    <h3>
                      {tipo == "CONSERVACAO_DE_ESPECIES"
                        ? "CONSERVAÇÃO"
                        : tipo == "CONSCIENTIZACAO_E_EDUCACAO"
                        ? "CONSCIENTIZAÇÃO"
                        : tipo}
                    </h3>
                  </div>
                  {cupom && cupom.titulo ? (
                    <div className={styles.rewardsblock}>
                      <h2>Recompensas</h2>
                      <p>{cupom.titulo}</p>
                      <p>{cupom.descricao}</p>
                      <br></br>
                      <div className={styles.couponblock}>
                        <h2>Código de desconto:</h2>
                        <div className={styles.greenroundedcard}>
                          <h3>####</h3>
                        </div>
                        <h3>Código ainda não disponível!</h3>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/*participants section*/}
              {participantsLoading && participantsData.length < 1 ? (
                <ClipLoader
                  color={"#000"}
                  loading={true}
                  size={50}
                  cssOverride={override}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <div className={styles.participantssection}>
                  <ParticipantsList participantsInfo={participantsData} />
                </div>
              )}

              {isSubscribed && (
                <div className={styles.cancelbutton}>
                  <button onClick={openModal}>
                    {buttonLoading ? (
                      <ClipLoader
                        color={"#6f9200"}
                        loading={true}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faX}
                          style={{ color: "#ff3332" }}
                        />
                        <h2>Cancelar inscrição</h2>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EventDetails;
