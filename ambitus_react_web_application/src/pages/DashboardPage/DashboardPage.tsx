import { useEffect } from "react";
import AccessNavbar from "../../components/AccessNavbar/AccessNavbar";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import { DashContentProvider } from "../../utils/contexts/dashboardAction";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import colors from "../../utils/colors/colors.module.css";

const DashboardPage = () => {
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
    <DashContentProvider>
      <AccessNavbar navbarType={"withIcons"} />
      <DashboardContent />
    </DashContentProvider>
  );
};
export default DashboardPage;
