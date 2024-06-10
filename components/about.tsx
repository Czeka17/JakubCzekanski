import styles from './about.module.scss'
function About(){
    
    return <section className={styles.about} id='about'>
        <div className={styles.container} data-aos="fade-up">
            <h2 className={styles.about__title}>About</h2>
            <p className={styles.about_text}>Hi there! I'm Jacob, a dedicated and experienced front-end developer with a passion for creating beautiful, user-friendly websites. With 2 years in the field, I specialize in using the latest web technologies to bring your vision to life. I focus on writing clean, efficient code and infusing creativity into every project. I manage projects independently from concept to deployment, ensuring timely and innovative solutions. Whether you need a dynamic e-commerce site, an interactive portfolio, or a scalable web application, I'm here to help. Let's work together to make your ideas a reality. Contact me today and let's get started!</p>
        </div>
    </section>
}
export default About;