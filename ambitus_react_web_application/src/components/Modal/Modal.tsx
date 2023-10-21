import ReactDOM from "react-dom";
import { ModalProps } from "../../types/ModalType";
import styles from "./Modal.module.css";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import colors from "../../utils/colors/colors.module.css";
import { useEffect } from "react";

const modalRoot = document.getElementById("modal-root")!;

const Modal = ({ isOpen, children }: ModalProps) => {
  //theme control
  const { currentTheme } = useTheme();

  console.log("Coming from modal.tsx");

  const modalStyle = currentTheme === "light" ? styles.modal : styles.darkmodal;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modaloverlay}>
      <div className={modalStyle}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
