import React, {useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {
	SiTypescript,
	SiJavascript,
	SiCss3,
	SiReact,
	SiRedux,
	SiPostman,
	SiNextdotjs,
	SiHtml5,
	SiGit,
	SiSass,
	SiTailwindcss,
	SiMongodb,
	SiFirebase,
	SiExpo,
	SiJest,
	SiNodedotjs,
	SiExpress,
	SiMongoose
} from "react-icons/si";
import styles from "./skillsbox.module.scss";
import Skill from "./skill";

function SkillsBox(){
const skills = [
    { icon: SiHtml5, label: "HTML" },
    { icon: SiCss3, label: "CSS" },
    { icon: SiSass, label: "SASS" },
	{ icon: SiJavascript, label: "JAVASCRIPT"},
	{ icon: SiTypescript, label:"TYPESCRIPT"},
	{ icon: SiReact, label: "REACT"},
	{ icon: SiReact, label: "REACT NATIVE"},
{ icon: SiRedux, label: "REDUX"},
{ icon: SiNextdotjs, label: "NEXTJS"},
{ icon: SiExpo, label: "EXPO"},
{ icon: SiNodedotjs, label: "NODEJS"},
{ icon: SiMongodb, label: "MONGODB"},
{ icon: SiMongoose, label: "MONGOOSE"},
{ icon: SiExpress, label: "EXPRESS"},
{ icon: SiFirebase, label: "FIREBASE"},
{ icon: SiJest, label: "JEST"},
{ icon: SiPostman, label: "POSTMAN"},
{ icon: SiTailwindcss, label: "TAILWINDCSS"},
  ];

  const [items, setItems] = useState(skills);

  const moveCard = (fromIndex:number, toIndex:number) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.grid}>
        {items.map((skill, index) => (
          <Skill
            key={index}
            index={index}
            icon={skill.icon}
            label={skill.label}
            moveCard={moveCard}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default SkillsBox;
