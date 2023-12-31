import { useEffect } from "react";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import colors from '../../utils/colors/colors.module.css';
import AccessNavbar from "../../components/AccessNavbar/AccessNavbar";
import AccessMainText from "../../components/AccessMainText/AccessMainText";
import PlantsDetail from "../../components/PlantsDetail/PlantsDetail";

const SignUpPage = () => {

    //theme control
    const { currentTheme} = useTheme();

    useEffect(() => {
      currentTheme == "light" ? document.body.classList.add(colors.lthemebackground) : document.body.classList.add(colors.dthemebackground);
      return () => {
        document.body.classList.remove(colors.lthemebackground);
      };
    }, [currentTheme]);
    
    return (

        <div className={`${colors.lthemebackground}`}>
          <AccessNavbar navbarType={'clean'}/>
          <AccessMainText formType={['signup']}/>
          <PlantsDetail/>
        </div>
      );
    

}

export default SignUpPage;