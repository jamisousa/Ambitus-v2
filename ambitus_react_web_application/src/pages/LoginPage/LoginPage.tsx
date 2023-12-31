import AccessMainText from "../../components/AccessMainText/AccessMainText";
import AccessNavbar from "../../components/AccessNavbar/AccessNavbar";
import styles from "./LoginPage.module.css";
import colors from "../../utils/colors/colors.module.css";
import { useEffect } from "react";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import PlantsDetail from "../../components/PlantsDetail/PlantsDetail";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  //theme control
  const { currentTheme } = useTheme();

  useEffect(() => {
    currentTheme == "light"
      ? document.body.classList.add(colors.lthemebackground)
      : document.body.classList.add(colors.dthemebackground);
    return () => {
      document.body.classList.remove(colors.lthemebackground);
    };
  }, [currentTheme]);

  return (
    <div className={`${styles.mainsection} ${colors.lthemebackground}`}>
      <AccessNavbar navbarType={"clean"} />
      <AccessMainText formType={["login"]} />
      <PlantsDetail />
    </div>
  );
}

export default LoginPage;
