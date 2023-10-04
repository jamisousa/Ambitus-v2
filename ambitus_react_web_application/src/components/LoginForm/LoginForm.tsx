import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../../utils/spinner/spinner";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import image from '../../resources/img/google.png';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    //call services and login
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const loginSocialHandler = () => {
    //call services and login w/ social media
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const toggleShowPassword = () => {
    return setShowPassword(!showPassword);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };


  return (
    <div className={styles.mainsection}>
      <h1>Que bom que está de volta!</h1>

      <div className={styles.fieldssection}>
        {loading ? (
          <ClipLoader
            color={"#000"}
            loading={true}
            size={100}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <form>
            <div className={styles.fieldgroup}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.formfield}
                  type="email"
                  id="email"
                  placeholder=" "
                />
                <label className={styles.loginlabel} htmlFor="email">
                  E-mail
                </label>
              </div>
            </div>
            <div className={styles.fieldgroup}>
              <div className={styles.inputContainer}>
                <input
                    className={styles.formfield}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className={styles.loginlabel} htmlFor="password">
                  Senha
                </label>
                <span className={styles.iconContainer} onClick={toggleShowPassword}>
                {showPassword ? <FontAwesomeIcon icon={faEye} /> :  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className={styles.eyeIcon}
                  />}
                 
                </span>
              </div>
            </div>
   

            <div className={styles.submitfields}>
    <input
        className={styles.submitButton}
        type="submit"
        value="Entrar com e-mail"
        onClick={loginHandler}
    />
    <div className={styles.googleLoginContainer}>
        <input
            className={styles.submitSocialButton}
            type="submit"
            value="Entrar com Google"
            onClick={loginSocialHandler}
        />
        <img src={image} alt="Google Logo" className={styles.googleImage} />
    </div>
    <h5>
        Não possui uma conta? <Link to={"/signup"}>Crie agora!</Link>
    </h5>
</div>



          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
