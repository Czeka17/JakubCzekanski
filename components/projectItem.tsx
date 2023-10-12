import Image from 'next/image';
import styles from './projectitem.module.scss'
import keanu from '../public/images/keanu.png'

interface ProjectItemProps{
    title:string,
    description:string,
    techstack:string[],
    imageUrl: string;
}
function ProjectItem({title,description,techstack,imageUrl}:ProjectItemProps){

    type ImageMapping = {
		[key: string]: any; 
	  };
    const imageMapping:ImageMapping = {
        "Mooviz.webp": require("../public/images/mooviz.png")
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
         <div><Image className={styles['projectItem__card-image']} src={loadImage(imageUrl)} alt='keanu' /></div>
</div>
    </div>
}
export default ProjectItem;