import styles from './AccessNavbar.module.css';
import image from '../../resources/img/navbar.svg';
import { useTheme } from '../../utils/contexts/globalThemeContext';
import colors from '../../utils/colors/colors.module.css';

const AccessNavbar = () => {

  const { currentTheme} = useTheme();

  const navbarcolor = currentTheme == "light" ? `${styles.mainsection} ${colors.lthemebackground}` : `${styles.mainsection} ${colors.dthemebackground}`

    return (
      <div className={navbarcolor}>
        <img src={image} />
      </div>
    )
  }
  
export default AccessNavbar
  