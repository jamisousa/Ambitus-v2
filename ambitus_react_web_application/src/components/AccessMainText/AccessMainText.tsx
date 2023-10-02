import styles from './AccessMainText.module.css';
import greenbrand from '../../resources/img/ambitusName-compressed.svg';
import { useTheme } from '../../utils/contexts/globalThemeContext';
import whitebrand from '../../resources/img/lightAmbitusName-compressed.svg';
import LoginForm from '../LoginForm/LoginForm';
import {AccessMainTextProps} from '../../types/AccessMainTextProps'; 

const AccessMainText = (props: AccessMainTextProps) =>{

    const {currentTheme} = useTheme();

    const textStyle = currentTheme == "light" ? styles.darkttext : styles.lighttext

    return(
        <div className={`${styles.mainsection}`}>
            <div className={styles.textsection}>
                <img src={currentTheme == "light" ? greenbrand : whitebrand}/>
                <h4 className={textStyle}>Tornando o mundo um lugar melhor hoje </h4>
            </div>
            <div className={styles.formsection}>
                <LoginForm/>
            </div>
        </div>
    )

}

export default AccessMainText;