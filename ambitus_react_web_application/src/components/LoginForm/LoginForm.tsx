import { BrowserRouter, Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../../utils/spinner/spinner";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import image from "../../resources/img/google.png";
import { useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "../../utils/regex/Regex";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  //check regex before redirect
  //password must contain at least a letter and a number
  const validateInformation = () => {
    console.log(email);
    console.log(password);
    if (
      !validEmail.test(email) ||
      !validPassword.test(password) ||
      password.length < 1 ||
      email.length < 1 ||
      password == "" ||
      email == ""
    ) {
      setError(true);
      setLoading(false);
      return false;
    }
    setError(false);
    setLoading(false);
    console.log("Validated");
    return true;
  };

  const loginHandler = () => {
    //TODO: call services and login after validation
    setLoading(true);
    setTimeout(() => {
      const validation = validateInformation();
      if (validation) {
        console.log("Validation successful");
        navigate("/dashboard");
        setLoading(false);
      }
    }, 2000);
  };

  const loginSocialHandler = () => {
    //TODO: call services and login w/ social media
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const toggleShowPassword = () => {
    return setShowPassword(!showPassword);
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
                  className={error ? styles.errorformfield : styles.formfield}
                  type="email"
                  id="email"
                  placeholder=" "
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className={styles.loginlabel} htmlFor="email">
                  E-mail
                </label>
              </div>
            </div>
            <div className={styles.fieldgroup}>
              <div className={styles.inputContainer}>
                <input
                  className={`${
                    error ? styles.errorformfield : styles.formfield
                  } ${showPassword ? styles.showPassword : ""} ${
                    isPasswordFocused ? styles.focused : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ref={passwordInputRef}
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

            {error && <div className={styles.errorInformation}><h5>Verifique suas informações e tente novamente.</h5></div>}

            <div className={styles.submitfields}>
              <input
                className={styles.submitButton}
                type="submit"
                value="Entrar com e-mail"
                onClick={loginHandler}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.googleLoginContainer}>
                <input
                  className={styles.submitSocialButton}
                  type="submit"
                  value="Entrar com Google"
                  onClick={loginSocialHandler}
                />
                <img
                  src={image}
                  alt="Google Logo"
                  className={styles.googleImage}
                />
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
