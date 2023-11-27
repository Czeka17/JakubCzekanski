import ReactPlayer from 'react-player';
import styles from './Modal.module.scss'
import { CSSTransition } from 'react-transition-group';
interface VideoModalProps{
    closeModal:() => void;
    videoUrl?: string | null;
    showModal:boolean;
    title?:string | null;
    message?:string | null;
}
function Modal({closeModal,videoUrl,title,message,showModal}:VideoModalProps){
  console.log(videoUrl)
    return <div className={styles.modal}>
          <div className={styles.modal__content}>
          <div className={styles.backdrop} onClick={closeModal}></div>
         {videoUrl ?  <ReactPlayer
        url={videoUrl} 
        controls={true}
        autoplay={true}
        width={"80%"}
        height={"80%"}
        className={styles["modal__content-player"]}
      /> : <div className={styles["modal__content-text"]}>
        <h3>{title}</h3>
        <p>{message}</p>
        <button onClick={closeModal}>OK</button>
        </div>}
          </div>
        </div>
}
export default Modal;