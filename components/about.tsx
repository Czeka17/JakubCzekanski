import styles from './about.module.scss'
function About(){
    return <section className={styles.about}>
        <div className={styles.container}>
            <h2 className={styles.about__title}>About</h2>
            <p className={styles.about_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugiat voluptate officia nulla aliquam laudantium, velit dicta debitis iste non accusamus tempore voluptatibus. Officia architecto libero laudantium, alias dolore autem.</p>
        </div>
    </section>
}
export default About;