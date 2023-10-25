import { getDashContent } from "../../utils/contexts/dashboardAction";
import EventDetails from "../EventDetails/EventDetails";
import EventsList from "../EventsList/EventsList";

const DashboardContent = () => {
  const { currentContent, currentEvent } = getDashContent();

  return (
    <>
      {currentContent === "events" ? (
        <EventsList />
      ) : (
        <EventDetails eventinfo={currentEvent} />
      )}
    </>
  );
};

export default DashboardContent;
