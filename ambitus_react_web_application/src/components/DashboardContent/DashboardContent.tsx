import { useNavigate } from "react-router-dom";
import { getDashContent } from "../../utils/contexts/dashboardAction";
import EventDetails from "../EventDetails/EventDetails";
import EventsList from "../EventsList/EventsList";
import Profile from "../Profile/Profile";
import { useEffect } from "react";
import DashboardHome from "../DashboardHome/DashboardHome";

const DashboardContent = () => {
  const { currentContent, currentEvent } = getDashContent();

  const image = localStorage.getItem("user_image");
  const username = localStorage.getItem("user_name");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!username || !token) {
      navigate("/login");
    }
  }, [currentContent]);

  return (
    <>
      {currentContent === "events" ? (
        <EventsList />
      ) : currentContent === "event-details" ? (
        <EventDetails eventinfo={currentEvent} />
      ) : currentContent === "profile" ? (
        <Profile />
      ) : currentContent === "home" ? (
        <DashboardHome />
      ) : (
        ""
      )}
    </>
  );
};

export default DashboardContent;
