import styles from './about.module.scss'
function About(){
    return <section className={styles.about} id='about'>
        <div className={styles.container}>
            <h2 className={styles.about__title}>About</h2>
            <p className={styles.about_text}> I'm Jakub Czekański, a self-taught frontend React developer. My journey in web development began through online courses, and I've honed my skills by building applications daily. I have a deep-rooted passion for technology, sports, music, and video games.</p>
            <p className={styles.about_text}>My current aspiration is to evolve into a full-stack developer, specializing in the MERN stack, or to further excel as a frontend developer. With the experience I've gained, I'm confident in my ability to contribute to the industry and assist companies in creating captivating web solutions for their businesses. I am driven by ambition and a strong motivation to craft exceptional user experiences.</p>
        </div>
    </section>
}
export default About;