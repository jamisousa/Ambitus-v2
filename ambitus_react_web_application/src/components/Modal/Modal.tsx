import ReactDOM from "react-dom";
import { ModalProps } from "../../types/ModalType";
import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root")!;

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modaloverlay}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
