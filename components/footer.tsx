import {SiGithub,SiLinkedin} from 'react-icons/si'
import classes from './footer.module.scss'
function Footer(){

    const year = new Date().getFullYear();

    return <footer className={classes.footer}>
        <div className={classes.socials}>
            <div><a href='https://github.com/Czeka17' target='_blank'><SiGithub/><p>Github</p></a></div>
            <div><a href='https://www.linkedin.com/in/jakub-czekański-5562b0260/' target='_blank'><SiLinkedin/><p>Linkedin</p></a></div>
        </div>
        <hr/>
        <div>
            <p>Projected and made by Jakub Czekański | {year}</p>
        </div>
    </footer>
}
export default Footer;