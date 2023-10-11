import {useState} from 'react'
import styles from './skillCard.module.scss'
import Image from 'next/image';
import keanu from '../public/images/keanu.png'
interface SkillCardProps{
    title:string;
    expertise:string[]
}
function SkillCard({ title, expertise }:SkillCardProps) {
  
  
    return (
        <div className={styles.card}>
            <div className={styles.content}>
            <div className={styles.back}>
              <div className={styles['back-content']}>
                <strong>{title}</strong>
              </div>
            </div>
            <div className={styles.front}>
            
           <div className={styles['front-text']}>
           {expertise.map((item, index) => (
              <div key={index}>
                <span>{item}</span>
                </div>
            ))}
           </div>
            </div>
          </div>
        </div>
    );
  }
  export default SkillCard;