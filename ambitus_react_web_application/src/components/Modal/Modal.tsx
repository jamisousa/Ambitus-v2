import ReactDOM from "react-dom";
import { ModalProps } from "../../types/ModalType";
import styles from "./Modal.module.css";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import { getDashContent } from "../../utils/contexts/dashboardAction";

const modalRoot = document.getElementById("modal-root")!;

const Modal = ({ isOpen, children }: ModalProps) => {
  //theme control
  const { currentTheme } = useTheme();

  const modalStyle = currentTheme === "light" ? styles.modal : styles.darkmodal;

  const { currentContent } = getDashContent();
  const additionalModalStyle =
    currentContent === "profile" ? styles.profilemodal : "";

  const backStyle = currentContent === "profile" ? styles.backstyle : "";

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modaloverlay}>
      <div className={backStyle}>
        <div className={`${modalStyle} ${additionalModalStyle}`}>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
