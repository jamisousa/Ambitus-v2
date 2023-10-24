import styles from "./EventDetails.module.css";
import mockImage from "../../resources/img/mockimage.jpeg";
import {
  faLocationDot,
  faCalendarMinus,
  faChevronLeft,
  faCheck,
  faCircleUser,
  faStar,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDashContent } from "../../utils/contexts/dashboardAction";
import ParticipantsList from "../ParticipantsList/ParticipantsList";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";
import Modal from "../Modal/Modal";
import { EventProps } from "../../types/EventType";
import { useTheme } from "../../utils/contexts/globalThemeContext";

const EventDetails = (props: EventProps) => {
  //TODO: change button state if user is already subscribed or not
  const { setCurrentContent } = getDashContent();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentTheme } = useTheme();

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

  const handleCancelSubscription = () => {
    //TODO: call api & cancel subscription; change button text
    closeModal();
  };

  //TODO: remove this mock
  const mockParticipants = [
    {
      name: "Test",
      level: 0,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpxhere.com%2Fpt%2Fphoto%2F125784&psig=AOvVaw2N0n6ohIjfd9CzhIfbSlbe&ust=1697678663208000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjHr_-3_oEDFQAAAAAdAAAAABAD",
    },
  ];

  //style
  const textStyle =
    currentTheme === "light" ? styles.whitetext : styles.darktext;
  const svgStyle = currentTheme === "light" ? "#292525" : "#fefae0";

  return (
    <>
      {isModalOpen && (
        <div className={styles.modal}>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <button onClick={closeModal} className={styles.modalclosebutton}>
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
                  Clique em "confirmar" para cancelar sua inscrição no evento.
                </p>
                <p>
                  <b>
                    Nota: Nível alcançado e medalhas conquistadas através da
                    inscrição no evento não serão recebidos.
                  </b>
                </p>
                <div className={styles.confirmcancel}>
                  <button onClick={handleCancelSubscription}>
                    <FontAwesomeIcon icon={faX} style={{ color: "#ff3332" }} />
                    <h2>Confirmar</h2>
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
          {/*TODO -- add props image*/}
          <div className={styles.contentfirstblock}>
            <div className={styles.cardimage}>
              <img src={mockImage} />
            </div>
            <div className={styles.primaryinformation}>
              <div className={styles.primaryfirstblock}>
                <div className={styles.cardtitle}>
                  <h1>{props.eventinfo.title}</h1>
                </div>
                <div className={styles.cardlocation}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: svgStyle }}
                  />
                  <h4>{props.eventinfo.location}</h4>
                </div>
                <div className={styles.carddate}>
                  <FontAwesomeIcon
                    icon={faCalendarMinus}
                    style={{ color: svgStyle }}
                  />
                  <h4>{props.eventinfo.date}</h4>
                </div>
                <div className={styles.cardauthor}>
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{ color: svgStyle }}
                  />
                  <h4>
                    Responsável: <span>{props.eventinfo.author}</span>
                  </h4>
                </div>
              </div>
              <div className={styles.primarysecondblock}>
                <button>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#6f9200" }}
                  />
                  Já inscrito
                </button>
                <div className={styles.bottombuttontext}>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#6f9200" }} />
                  <h5>Mock experience text here</h5>
                </div>
              </div>
            </div>
          </div>
          {/*TODO: add props for event rewards*/}
          {/*start description*/}
          <div className={styles.descriptionsection}>
            <div className={styles.descriptionbody}>
              <h2>Descrição</h2>
              <p>{props.eventinfo.description}</p>
              <div className={styles.greenroundedcard}>
                <h3>Category mock</h3>
              </div>
              <div className={styles.rewardsblock}>
                <h2>Recompensas</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo ipsum, incidunt aliquid molestias deleniti quos
                  sequi quae! Blanditiis, itaque soluta?
                </p>
                <br></br>
                <div className={styles.couponblock}>
                  <h2>Código de desconto:</h2>
                  <div className={styles.greenroundedcard}>
                    <h3>Coupon</h3>
                  </div>
                  <h3>Código ainda não disponível!</h3>
                </div>
              </div>
            </div>
          </div>
          {/*participants section*/}
          <div className={styles.participantssection}>
            <ParticipantsList participantsInfo={mockParticipants} />
          </div>

          <div className={styles.cancelbutton}>
            <button onClick={openModal}>
              <FontAwesomeIcon icon={faX} style={{ color: "#ff3332" }} />
              <h2>Cancelar inscrição</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
