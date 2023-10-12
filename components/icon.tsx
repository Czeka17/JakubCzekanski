import styles from './icon.module.scss'
import React from 'react';
import * as ReactIcons from 'react-icons/fa';
interface IconProps{
    x:number;
    y:number;
    icon:string;
}
const Icon = ({ icon, x, y }:IconProps) => {
    const iconMap = {
        'FaReact': ReactIcons.FaReact,
      };
  return (
    <div
      className={styles.icon}
      style={{ transform: `translate(${x}px, ${y}px)`, backgroundColor:'blue' }}
    >
      {icon}
    </div>
  );
};

export default Icon;
