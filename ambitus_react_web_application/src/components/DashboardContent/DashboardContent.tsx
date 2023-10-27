import { getDashContent } from "../../utils/contexts/dashboardAction";
import EventDetails from "../EventDetails/EventDetails";
import EventsList from "../EventsList/EventsList";
import Profile from "../Profile/Profile";

const DashboardContent = () => {
  const { currentContent, currentEvent } = getDashContent();

  return (
    <>
      {currentContent === "events" ? (
        <EventsList />
      ) : currentContent === "event-details" ? (
        <EventDetails eventinfo={currentEvent} />
      ) : currentContent === "profile" ? (
        <Profile />
      ) : (
        ""
      )}
    </>
  );
};

export default DashboardContent;
