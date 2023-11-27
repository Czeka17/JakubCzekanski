import styles from './MainNavigation.module.scss'
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import { FaCode } from "react-icons/fa";
function MainNavigation(){

  const [scrolling,setScrolling] = useState(false)
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setScrolling(true);
      } else{
        setScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
    return  <nav className={styles['menu-container']}>
       <div className={`${styles['bg-animation']} ${scrolling ? styles.scrolled : ''}`}></div>
   <div className={styles['menu-container__content']}>
   <div className={styles.mobilenav}>
   <div className={styles.burger}>
   <Hamburger toggled={isOpen} toggle={setOpen} />
   </div>
   {isOpen && <div className={styles.mobilenav__content}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#about">
            ABOUT
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#skills">
            SKILLS
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#projects">
            PROJECTS
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">
            CONTACT
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
        <a href="/pdf.pdf" target="_blank">RESUME</a>
        </li>
      </ul>
    </div>}
   </div>
  
    <a href="#" className={styles['menu-container__content-logo']}>
      JC<FaCode/>
    </a>

    <div className={styles.menu}>
      <ul>
      </ul>
      <ul>
        <li>
          <a href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#skills">
            SKILLS
          </a>
        </li>
        <li>
          <a href="#projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contact">
            CONTACT
          </a>
        </li>
        <li>
        <a href="/pdf.pdf" target="_blank">RESUME</a>         
        </li>
      </ul>
    </div>
   </div>
  </nav>
}
export default MainNavigation;