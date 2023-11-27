import Image from 'next/image';
import styles from './projectitem.module.scss'
import {useState} from 'react'
import Modal from './Modal';
import {SiCss3, SiExpress, SiJest, SiMongodb, SiMongoose, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript} from 'react-icons/si';
import { CSSTransition } from 'react-transition-group';
interface ProjectItemProps{
    title:string,
    description:string,
    techstack:string[],
    imageUrl: string;
    videoUrl: string;
    codeUrl: string;
    liveUrl: string;
}
type HideBallState = { [key: string]: boolean };
function ProjectItem({title,description,techstack,imageUrl,videoUrl,codeUrl,liveUrl}:ProjectItemProps){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideBall, setHideBall] = useState<HideBallState>({});

  function hideBallHandler(ball:string){
    setHideBall((prevBalls) => ({
      ...prevBalls,
      [ball]:true,
    }))
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const iconMapping: { [key: string]: React.ReactElement } = {
    Reactjs: <SiReact />,
    Typescript: <SiTypescript />,
    Nextjs: <SiNextdotjs/>,
    TailwindCSS: <SiTailwindcss/>,
    Mongodb: <SiMongodb/>,
    Redux: <SiRedux/>,
    "CSS Modules": <SiCss3/>,
    Nodejs: <SiNodedotjs/>,
    Express: <SiExpress/>,
    Mongoose: <SiMongoose/>,
    Jest: <SiJest/>

  };
  const iconComponents = techstack.map((icon, index) => {
    const iconComponent = iconMapping[icon] || null;
    return (
      <div key={index} className={styles.iconDiv}>
        {iconComponent}
      </div>
    );
  });
  
    type ImageMapping = {
		[key: string]: any; 
	  };
    
    const imageMapping:ImageMapping = {
        "Mooviz.webp": require("../public/images/mooviz.png"),
        "PostIt.webp": require("../public/images/postit.png"),
        "Todo.webp": require("../public/images/todo.png"),
        "master-gym.png": require("../public/images/master-gym.png"),
    }
    const loadImage = (url: string) => {
		return imageMapping[url] || null; 
	  };
    return <div className={styles.container}>
        <div className={styles.projectItem__box__item}>
    <div>
    <h3>{title}</h3>
     <p>{description}</p>

    </div>
         <div onClick={openModal} style={{display:"flex",justifyContent:"center", alignItems:"center", padding:"1em"}}><Image className={styles['projectItem__card-image']} src={loadImage(imageUrl)} alt='Preview of project' /></div>
</div>
<div className={styles.ballscontainer}>
{iconComponents.map((iconComponent, index) => (
          <div key={index} className={`${styles.ball} ${hideBall[`icon${index + 1}`] ? styles.hidden : ''}`}
          onClick={() => hideBallHandler(`icon${index + 1}`)}>
            {iconComponent}
          </div>
        ))}
</div>
<div className={styles.projectItem__buttons}><a target='_blank' href={codeUrl}><button>Code</button></a><a href={liveUrl} target='_blank'><button>Live</button></a></div>
      {isModalOpen && <Modal showModal={isModalOpen} closeModal={closeModal} videoUrl={videoUrl}/>}
    </div>
}
export default ProjectItem;