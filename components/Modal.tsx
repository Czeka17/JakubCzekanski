
import styles from './Modal.module.scss'

interface VideoModalProps{
    closeModal:() => void;
    title:string | null;
    message:string | null;
}
function Modal({closeModal,title,message}:VideoModalProps){

    return <div className={styles.modal}>
          <div className={styles.modal__content}>
          <div className={styles.backdrop} onClick={closeModal}></div>
         <div className={styles["modal__content-text"]}>
        <h3>{title}</h3>
        <p>{message}</p>
        <button onClick={closeModal}>OK</button>
        </div>
          </div>
        </div>
}
export default Modal;