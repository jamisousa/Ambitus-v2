import ReactDOM from 'react-dom';
import { ModalProps } from '../../types/ModalType';
import styles from './SignUpModal.module.css';

const modalRoot = document.getElementById('modal-root')!;

const SignUpModal = ({ isOpen, children }:ModalProps) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.modaloverlay}>
          <div className={styles.modal}>
            {children}
          </div>
        </div>,
        modalRoot
      );
};

export default SignUpModal;
