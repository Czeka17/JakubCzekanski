import ReactPlayer from 'react-player';
import styles from './videoModal.module.scss'
interface VideoModalProps{
    closeModal:() => void;
}
function VideoModal({closeModal}:VideoModalProps){
    return <div className={styles.modal}>
          <div className={styles.modal__content}>
          <div className={styles.backdrop} onClick={closeModal}></div>
           <ReactPlayer
        url={'/mooviz.mp4'} 
        controls={true}
        autoplay={true}
        width={"80%"}
        height={"80%"}
        className={styles["modal__content-player"]}
      />
          </div>
        </div>
}
export default VideoModal;