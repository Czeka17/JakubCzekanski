import styles from './MainNavigation.module.scss'
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';

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
          <a href="#signup">
            ABOUT
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#login">
            SKILLS
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#A">
            PROJECTS
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#A">
            CONTACT
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
        <a href="/pdf.pdf" target="_blank">RESUME</a>a
        </li>
      </ul>
    </div>}
   </div>
  
    <a href="#" className={styles['menu-container__content-logo']}>
      JC
    </a>

    <div className={styles.menu}>
      <ul>
      </ul>
      <ul>
        <li>
          <a href="#signup">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#login">
            SKILLS
          </a>
        </li>
        <li>
          <a href="#A">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#A">
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