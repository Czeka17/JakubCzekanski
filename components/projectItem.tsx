import Image from 'next/image';
import styles from './projectitem.module.scss'
import {useState} from 'react'
import ReactPlayer from 'react-player';
import VideoModal from './videoModal';
interface ProjectItemProps{
    title:string,
    description:string,
    techstack:string[],
    imageUrl: string;
}
function ProjectItem({title,description,techstack,imageUrl}:ProjectItemProps){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    type ImageMapping = {
		[key: string]: any; 
	  };
    const imageMapping:ImageMapping = {
        "Mooviz.webp": require("../public/images/mooviz.png"),
        "PostIt.webp": require("../public/images/postit.png"),
        "Todo.webp": require("../public/images/todo.png")
    }
    const loadImage = (url: string) => {
		return imageMapping[url] || null; 
	  };
    return <div className={styles.container}>
        <div className={styles.projectItem__box__item}>
    <div>
    <h3>{title}</h3>
     <p>{description}</p>
   <ul>
   {techstack.map((item,index) => (
        <li key={index}>{item}</li>
    ))}
   </ul>
    </div>
         <div onClick={openModal}><Image className={styles['projectItem__card-image']} src={loadImage(imageUrl)} alt='keanu' /></div>
</div>
{isModalOpen && (
      <VideoModal closeModal={closeModal}/>
      )}
    </div>
}
export default ProjectItem;