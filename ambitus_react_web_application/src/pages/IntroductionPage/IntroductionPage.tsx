import AccessNavbar from "../../components/AccessNavbar/AccessNavbar";
import PlantsDetail from "../../components/PlantsDetail/PlantsDetail";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import colors from "../../utils/colors/colors.module.css";
import {useEffect} from 'react';
import IntroCarousel from "../../components/Carousel/Carousel";

const IntroductionPage = () => {

    //theme control
    const { currentTheme} = useTheme();

    useEffect(() => {
      currentTheme == "light" ? document.body.classList.add(colors.lthemebackground) : document.body.classList.add(colors.dthemebackground);
      return () => {
        document.body.classList.remove(colors.lthemebackground);
      };
    }, [currentTheme]);


    return(
        <>
            <AccessNavbar/>
            <PlantsDetail/>
            <IntroCarousel/>
        </>
    );

}

export default IntroductionPage;