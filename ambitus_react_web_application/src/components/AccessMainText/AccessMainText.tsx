import styles from "./AccessMainText.module.css";
import greenbrand from "../../resources/img/ambitusName-compressed.svg";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import LoginForm from "../LoginForm/LoginForm";
import { AccessMainTextProps } from "../../types/FormType";
import SignUpForm from "../SignUpForm/SignUpForm";

const AccessMainText = (props: AccessMainTextProps) => {
  const { currentTheme } = useTheme();

  const textStyle =
    currentTheme == "light" ? styles.darkttext : styles.lighttext;

  return (
    <div className={`${styles.mainsection}`}>
      <div className={styles.textsection}>
        <img src={greenbrand} draggable="false" />
        <h4 className={textStyle}>Tornando o mundo um lugar melhor hoje </h4>
      </div>

      <div className={styles.formsection}>
        {props.formType[0] == "login" ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default AccessMainText;
