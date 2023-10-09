import { faCamera, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";
import styles from "./SignUpForm.module.css";
import image from "../../resources/img/google.png";
import SignUpModal from "../SignUpModal/SignUpModal";
import {
  validDate,
  validEmail,
  validName,
  validPassword,
} from "../../utils/regex/Regex";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    loading: false,
    showPassword: false,
    password: "",
    showRepeatPassword: false,
    repeatPassword: "",
    birthDate: "",
    error: false,
    gender: "",
    fullname: "",
    email: "",
    modalError: false,
    selectedImage: "",
    isModalOpen: false,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const genders = ["Masculino", "Feminino", "Outro"];
  const navigate = useNavigate();

  //portal control
  const openModal = () => {
    setFormData((prevData) => ({ ...prevData, isModalOpen: true }));
  };

  const closeModal = () => {
    setFormData((prevData) => ({ ...prevData, isModalOpen: false }));
  };

  //validate initial information before modal opens
  const validateInformation = () => {
    const trimmedFullName = formData.fullname.trim();
    setFormData((prevData) => ({ ...prevData, loading: true }));
    if (
      !validEmail.test(formData.email) ||
      !validName.test(trimmedFullName) ||
      !validPassword.test(formData.password) ||
      !validPassword.test(formData.repeatPassword) ||
      formData.password !== formData.repeatPassword
    ) {
      setFormData((prevData) => ({ ...prevData, loading: false, error: true }));
      return false;
    } else {
      return true;
    }
  };

  //file upload information
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        selectedImage: URL.createObjectURL(file),
      }));
    }
  };

  //validates additional information (modal information)
  const validateAdditionalInformation = () => {
    setFormData((prevData) => ({ ...prevData, loading: true }));
    const initialValidation = validateInformation();
    if (initialValidation) {
      const cleanedBirthDate = formData.birthDate.replace(/[^0-9-]/g, "");

      if (
        !validDate.test(cleanedBirthDate) ||
        formData.gender.length < 1 ||
        formData.selectedImage.length < 1
      ) {
        setFormData((prevData) => ({
          ...prevData,
          loading: false,
          modalError: true,
        }));
      } else {
        navigate("/introduction");
      }
    }
    setFormData((prevData) => ({ ...prevData, loading: false }));
  };

  //before modal open
  const signUpHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormData((prevData) => ({ ...prevData, loading: true }));
    const validation = validateInformation();
    if (validation) {
      setFormData((prevData) => ({
        ...prevData,
        loading: false,
        error: false,
      }));
      openModal();
    } else {
      setFormData((prevData) => ({ ...prevData, error: true }));
    }
    setFormData((prevData) => ({ ...prevData, loading: false }));
  };

  //before modal open
  const signUpSocialHandler = (e: { preventDefault: () => void }) => {
    //TODO: add social login instead of normal validation
    e.preventDefault();
    setFormData((prevData) => ({ ...prevData, loading: true }));
    setTimeout(() => {
      setFormData((prevData) => ({ ...prevData, loading: false }));
    }, 2000);
  };

  //password toggles
  const toggleShowPassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const toggleShowRepeatPassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showRepeatPassword: !prevData.showRepeatPassword,
    }));
  };

  return (
    <div className={styles.mainsection}>
      {formData.isModalOpen && (
        <SignUpModal isOpen={formData.isModalOpen} onClose={closeModal}>
          <button onClick={closeModal} className={styles.modalclosebutton}>
            X
          </button>
          <h4>Informações complementares</h4>

          {formData.loading ? (
            <ClipLoader
              color={"#000"}
              loading={true}
              size={100}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <>
              <section
                className={styles.addphotosection}
                onClick={() => fileInputRef.current?.click()}
                style={{ padding: formData.selectedImage ? 0 : "1em" }}
              >
                {formData.selectedImage ? (
                  <img src={formData.selectedImage} alt="Selected Profile" />
                ) : (
                  <>
                    <FontAwesomeIcon
                      icon={faCamera}
                      size="2xl"
                      style={{ color: "#9ab34d" }}
                    />
                    <h5>Adicionar foto de perfil</h5>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e)}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
              </section>

              <div className={styles.fieldgroup}>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.formfield}
                    type="date"
                    id="date"
                    placeholder=" "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        birthDate: e.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.target.value,
                      })
                    }
                    value={formData.gender}
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

              {formData.modalError && (
                <h6>Preencha todos os dados e tente novamente.</h6>
              )}

              <div className={styles.submitfields}>
                <input
                  className={styles.submitButton}
                  type="submit"
                  value="Finalizar Cadastro"
                  onClick={validateAdditionalInformation}
                />
              </div>
            </>
          )}
        </SignUpModal>
      )}

      <h1>Que bom que está aqui!</h1>

      <div className={styles.fieldssection}>
        {formData.loading ? (
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
                  className={
                    formData.error ? styles.errorformfield : styles.formfield
                  }
                  type="name"
                  id="name"
                  placeholder=" "
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullname: e.target.value,
                    })
                  }
                />
                <label className={styles.signuplabel} htmlFor="name">
                  Nome
                </label>
              </div>
            </div>
            <div className={styles.fieldgroup}>
              <div className={styles.inputContainer}>
                <input
                  className={
                    formData.error ? styles.errorformfield : styles.formfield
                  }
                  type="email"
                  id="email"
                  placeholder=" "
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
                <label className={styles.signuplabel} htmlFor="email">
                  E-mail
                </label>
              </div>
            </div>
            <div className={styles.fieldgroup}>
              <div className={styles.inputContainer}>
                <input
                  className={
                    formData.error ? styles.errorformfield : styles.formfield
                  }
                  type={formData.showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />
                <label className={styles.signuplabel} htmlFor="password">
                  Senha
                </label>
                <span
                  className={styles.iconContainer}
                  onClick={toggleShowPassword}
                >
                  {formData.showPassword ? (
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
                  className={
                    formData.error ? styles.errorformfield : styles.formfield
                  }
                  type={formData.showRepeatPassword ? "text" : "password"}
                  id="repeat-password"
                  value={formData.repeatPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      repeatPassword: e.target.value,
                    })
                  }
                />
                <label className={styles.signuplabel} htmlFor="repeat-password">
                  Repetir senha
                </label>
                <span
                  className={styles.iconContainer}
                  onClick={toggleShowRepeatPassword}
                >
                  {formData.showRepeatPassword ? (
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

            {formData.error && (
              <div className={styles.errorInformation}>
                <h5>Verifique suas informações e tente novamente.</h5>
              </div>
            )}

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
