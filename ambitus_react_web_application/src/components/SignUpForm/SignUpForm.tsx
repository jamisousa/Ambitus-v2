import { faCamera, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";
import styles from "./SignUpForm.module.css";
import image from "../../resources/img/google.png";
import SignUpModal from "../SignUpModal/SignUpModal";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState(false);
  const [gender, setGender] = useState('');
  const genders = ["Masculino", "Feminino", "Outro"];
  const navigate = useNavigate();

  //portal control
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const signUpHandler = () => {
    //TODO: check information before opening modal
    openModal();
  };

  const signUpSocialHandler = () => {
    //TODO: check information before opening modal
    openModal();
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
      {isModalOpen && (
        <SignUpModal isOpen={isModalOpen} onClose={closeModal}>
          <button onClick={closeModal} className={styles.modalclosebutton}>
              X
            </button>
          <h4>Informações complementares</h4>
          <section className={styles.addphotosection}>
            <FontAwesomeIcon
              icon={faCamera}
              size="2xl"
              style={{ color: "#9ab34d" }}
            />
            <h5>Adicionar foto de perfil</h5>
          </section>
          <div className={styles.fieldgroup}>
            <div className={styles.inputContainer}>
              <input
                className={styles.formfield}
                type="date"
                id="date"
                placeholder=" "
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <label className={styles.signuplabel} htmlFor="date">
                Data de nascimento
              </label>
            </div>
          </div>

          <div className={styles.fieldgroup}>
            <div className={styles.inputContainer}>
              <label className={styles.signuplabel}>
                Como você se identifica
              </label>
              <select
                className={styles.modalformfield}
                id="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value=""></option>
                {genders.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </SignUpModal>
      )}

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
                <label className={styles.signuplabel} htmlFor="name">
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
                <label className={styles.signuplabel} htmlFor="email">
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
                <label className={styles.signuplabel} htmlFor="password">
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
                <label className={styles.signuplabel} htmlFor="repeat-password">
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
              <div className={styles.googleSignUpContainer}>
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
