import ReactPlayer from 'react-player';
import styles from './videoModal.module.scss'
interface VideoModalProps{
    closeModal:() => void;
    videoUrl: string;
}
function VideoModal({closeModal,videoUrl}:VideoModalProps){
  console.log(videoUrl)
    return <div className={styles.modal}>
          <div className={styles.modal__content}>
          <div className={styles.backdrop} onClick={closeModal}></div>
           <ReactPlayer
        url={videoUrl} 
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