import { getDashContent } from "../../utils/contexts/dashboardAction";
import EventCard from "../EventCard/EventCard";
import styles from "./EventCardwCoupon.module.css";

const EventCardwCoupon = (props: any) => {
  const { setCurrentContent, setCurrentEvent, currentEvent } = getDashContent();

  const handleSwitchContext = () => {
    if (currentEvent) {
      setCurrentEvent(currentEvent);
      setCurrentContent("event-details");
    }
  };

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
            selectedEvent: props.eventInfo.selectedEvent,
          }}
          clickAction={handleSwitchContext}
        />

        <div className={styles.rewardsection}>
          <h2>{props.eventInfo.coupon.title}</h2>
          <h3>{props.eventInfo.coupon.description}</h3>
          {props.eventInfo.coupon.code && (
            <>
              <div className={styles.rewardsectioncoupon}>
                <span className={styles.couponLabel}>código do cupom:</span>
                <div className={styles.greenroundedcard}>
                  <h3>{props.eventInfo.coupon.code}</h3>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCardwCoupon;
