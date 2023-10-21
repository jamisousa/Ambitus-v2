import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../../utils/spinner/spinner";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import image from "../../resources/img/google.png";
import { useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "../../utils/regex/Regex";
import { useTheme } from "../../utils/contexts/globalThemeContext";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  const loginUrl = "";

  const handleLoginRequest = () => {
    const bodyData = {
      email,
      senha: password,
    };

    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then((response) => {
        console.log(response);
        setLoading(true);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        navigate("/dashboard");
        return response.json() as Promise<any>;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        //TODO: error handling
      });
  };

  //check regex before redirect
  //password must contain at least a letter and a number
  const validateInformation = (e: any) => {
    e.preventDefault();
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
    handleLoginRequest();
    return true;
  };

  // const loginHandler = () => {
  //   //TODO: call services and login after validation
  //   setLoading(true);
  //   setTimeout(() => {
  //     const validation = validateInformation();
  //     if (validation) {
  //       console.log("Validation successful");
  //       navigate("/dashboard");
  //       setLoading(false);
  //     }
  //   }, 2000);
  // };

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

  //styles
  const formStyle = error
    ? styles.errorformfield
    : currentTheme == "light"
    ? styles.formfield
    : `${styles.formfield} ${styles.darkformattributes}`;

  const passwordFieldStyle = `${formStyle} ${
    showPassword ? styles.showPassword : ""
  } ${isPasswordFocused ? styles.focused : ""}`;

  const svgStyle = currentTheme == "light" ? "#000" : "#FFF";

  return (
    <div
      className={`${styles.mainsection} ${
        currentTheme === "light" ? styles.lighttext : styles.darktext
      }`}
      id="maindiv"
    >
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
                  className={formStyle}
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
                  className={passwordFieldStyle}
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
                    <FontAwesomeIcon icon={faEye} style={{ color: svgStyle }} />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className={styles.eyeIcon}
                      style={{ color: svgStyle }}
                    />
                  )}
                </span>
              </div>
            </div>

            {error && (
              <div className={styles.errorInformation}>
                <h5>Verifique suas informações e tente novamente.</h5>
              </div>
            )}

            <div className={styles.submitfields}>
              <input
                className={styles.submitButton}
                type="submit"
                value="Entrar com e-mail"
                onClick={validateInformation}
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
