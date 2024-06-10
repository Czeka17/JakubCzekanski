import Image from 'next/image';
import styles from './projectitem.module.scss'
import {useState} from 'react'
import Modal from './Modal';

interface ProjectItemProps{
    title:string,
    description:string,
    imageUrl: string;
    liveUrl: string;
}

function ProjectItem({title,description,imageUrl,liveUrl}:ProjectItemProps){




 
  
    type ImageMapping = {
		[key: string]: any; 
	  };
    
    const imageMapping:ImageMapping = {
        "Mooviz.webp": require("../public/images/bike-page.png"),
        "PostIt.webp": require("../public/images/master-gym.png"),
        "Todo.webp": require("../public/images/truck-page.png"),
        "master-gym.png": require("../public/images/jc.png"),
    }
    const loadImage = (url: string) => {
		return imageMapping[url] || null; 
	  };
    return <div className={styles.container} data-aos="fade-up">
        <div className={styles.projectItem__box__item}>
    <div>
    <div style={{display:"flex",justifyContent:"center", alignItems:"center", padding:"1em"}}><Image className={styles['projectItem__card-image']} src={loadImage(imageUrl)} alt='Preview of project' /></div>
    <div className={styles['projectItem__card-text']}>
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
    </div>
</div>
<div className={styles.projectItem__buttons}><a href={liveUrl} target='_blank'><button>Live</button></a></div>
    </div>
}
export default ProjectItem;