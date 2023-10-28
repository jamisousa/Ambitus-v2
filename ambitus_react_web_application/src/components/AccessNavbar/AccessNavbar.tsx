import styles from "./AccessNavbar.module.css";
import image from "../../resources/img/navbar.svg";
import darkImage from "../../resources/img/navbar-dark.svg";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import colors from "../../utils/colors/colors.module.css";
import { NavbarProps } from "../../types/NavbarType";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCircleUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { getDashContent } from "../../utils/contexts/dashboardAction";

const AccessNavbar = (props: NavbarProps) => {
  const { currentTheme } = useTheme();
  const { setCurrentContent, currentContent } = getDashContent();

  const navbarcolor =
    currentTheme == "light"
      ? `${styles.mainsection} ${colors.lthemebackground}`
      : `${styles.mainsection} ${colors.dthemebackground}`;

  const navbarImage = currentTheme == "light" ? image : darkImage;

  const [iconStates, setIconStates] = useState<{ [key: string]: boolean }>({
    house: true,
    calendar: false,
    user: false,
  });

  const toggleIconColor = (iconName: string) => {
    const updatedIconStates: { [key: string]: boolean } = {};

    for (const key in iconStates) {
      updatedIconStates[key] = key === iconName;
    }

    setIconStates(updatedIconStates);

    //TODO: change context based on what was clicked here
    iconName == "calendar"
      ? setCurrentContent("events")
      : iconName == "user"
      ? setCurrentContent("profile")
      : "";
  };

  useEffect(() => {
    currentContent === "events"
      ? toggleIconColor("calendar")
      : currentContent === "event-details"
      ? toggleIconColor("calendar")
      : currentContent === "profile"
      ? toggleIconColor("user")
      : "";
  }, [currentContent]);

  return props.navbarType == "clean" ? (
    <div className={navbarcolor}>
      <img src={navbarImage} />
    </div>
  ) : (
    <div className={`${navbarcolor} ${styles.navbarsection}`}>
      <img src={image} />
      <div className={styles.icongroup}>
        <FontAwesomeIcon
          icon={faHouse}
          style={{ color: iconStates.house ? "#6f9200" : "#817b71" }}
          onClick={() => toggleIconColor("house")}
        />
        <FontAwesomeIcon
          icon={faCalendarDays}
          style={{ color: iconStates.calendar ? "#6f9200" : "#817b71" }}
          onClick={() => toggleIconColor("calendar")}
        />
        <FontAwesomeIcon
          icon={faCircleUser}
          style={{ color: iconStates.user ? "#6f9200" : "#817b71" }}
          onClick={() => toggleIconColor("user")}
        />
      </div>
    </div>
  );
};

export default AccessNavbar;
