import { getDashContent } from "../../utils/contexts/dashboardAction";
import EventCard from "../EventCard/EventCard";
import styles from "./EventCardwCoupon.module.css";
const handleSwitchContext = (selectedEvent: any) => {
  const { setCurrentContent, setCurrentEvent, currentContent } =
    getDashContent();

  if (selectedEvent) {
    setCurrentEvent(selectedEvent);
    setCurrentContent("event-details");
  }
};

const EventCardwCoupon = (props: any) => {
  console.log("EventCardwCoupon");
  console.log(props.eventInfo.title);

  return (
    <div className={styles.fullsection}>
      <div className={styles.mainsection}>
        <EventCard
          eventInfo={{
            title: props.eventInfo.title,
            location: props.eventInfo.location,
            date: props.eventInfo.date,
            category:
              props.eventInfo.category == "CONSERVACAO_DE_ESPECIES"
                ? "CONSERVAÇÃO"
                : props.eventInfo.category == "CONSCIENTIZACAO_E_EDUCACAO"
                ? "CONSCIENTIZAÇÃO"
                : props.eventInfo.category,
            image: props.eventInfo.image,
          }}
          clickAction={handleSwitchContext}
        />

        <div className={styles.rewardsection}>
          <h2>Mock reward title here</h2>
          <h3>*Reward description here</h3>
          <div className={styles.rewardsectioncoupon}>
            <span className={styles.couponLabel}>código do cupom:</span>
            <div className={styles.greenroundedcard}>
              <h3>23236W</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardwCoupon;
