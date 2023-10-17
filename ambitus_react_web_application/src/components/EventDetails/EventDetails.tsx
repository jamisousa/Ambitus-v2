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

const EventDetails = () => {
  //TODO: change button state if user is already subscribed or not
  const { setCurrentContent } = getDashContent();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
          {/*first block of content (photo, title, description, location, author, button)*/}
          <div className={styles.contentfirstblock}>
            <div className={styles.cardimage}>
              <img src={mockImage} />
            </div>
            <div className={styles.primaryinformation}>
              <div className={styles.primaryfirstblock}>
                <div className={styles.cardtitle}>
                  <h1>Mock title</h1>
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
          {/*start description*/}
          <div className={styles.descriptionsection}>
            <div className={styles.descriptionbody}>
              <h2>Descrição</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis quisquam fugit molestias assumenda odit minima nihil
                suscipit, delectus iste nulla eum. Provident quis impedit nihil
                officiis quidem atque quasi? Doloribus qui laboriosam ducimus
                dolorem asperiores beatae ullam. Quis quam ratione laborum fugit
                perferendis quaerat ipsam praesentium modi tempora beatae ipsa
                qui maxime, molestiae accusantium culpa fuga. Sint magnam eos,
                nulla doloremque laudantium accusantium reprehenderit dolorum
                eaque ipsa placeat sapiente quam suscipit facere officiis vitae
                nisi reiciendis in autem odit tempora fuga quibusdam. Tenetur
                nulla voluptate eligendi veritatis? Laborum, placeat
                necessitatibus nostrum pariatur tempora amet qui minus officiis
                magnam, aliquid saepe.
              </p>
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
            <ParticipantsList />
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
