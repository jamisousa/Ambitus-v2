import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";
import styles from "./SignUpForm.module.css";
import image from "../../resources/img/google.png";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");

  const signUpHandler = () => {
    //TODO: call modal
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const signUpSocialHandler = () => {
    //TODO: call modal
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const toggleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  const toggleShowRepeatPassword = () => {
    return setShowRepeatPassword(!showRepeatPassword);
  };

  return (
    <div className={styles.mainsection}>
      <h1>Que bom que está aqui!</h1>

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
                  type="name"
                  id="name"
                  placeholder=" "
                />
                <label className={styles.loginlabel} htmlFor="name">
                  Nome
                </label>
              </div>
            </div>
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className={styles.loginlabel} htmlFor="password">
                  Senha
                </label>
                <span
                  className={styles.iconContainer}
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className={styles.eyeIcon}
                    />
                  )}
                </span>
              </div>
            </div>

            <div className={styles.fieldgroup}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.formfield}
                  type={showRepeatPassword ? "text" : "password"}
                  id="repeat-password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <label className={styles.loginlabel} htmlFor="repeat-password">
                  Repetir senha
                </label>
                <span
                  className={styles.iconContainer}
                  onClick={toggleShowRepeatPassword}
                >
                  {showRepeatPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className={styles.eyeIcon}
                    />
                  )}
                </span>
              </div>
            </div>

            <div className={styles.submitfields}>
              <input
                className={styles.submitButton}
                type="submit"
                value="Cadastrar"
                onClick={signUpHandler}
              />
              <div className={styles.googleLoginContainer}>
                <input
                  className={styles.submitSocialButton}
                  type="submit"
                  value="Cadastrar com Google"
                  onClick={signUpSocialHandler}
                />
                <img
                  src={image}
                  alt="Google Logo"
                  className={styles.googleImage}
                />
              </div>
              <h5>
                Já tem uma conta? <Link to={"/login"}>Faça login.</Link>
              </h5>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
