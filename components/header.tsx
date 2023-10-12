import styles from './header.module.scss'
import keanu from '../public/images/keanu2.png'
import Image from 'next/image';
import myImage from '../public/images/me1.png'
function Header(){
 return <header className={styles.header}>
    <div className={styles.header__content}>
    <div><p className={styles['header__content-p']}>Hello, my name is</p><h2 className={styles['header__content-name']}>Jakub Czekański</h2><p  className={styles['header__content-p']}>Aspiring Front-end Developer</p></div>

    </div>
    </header>
}
export default Header;