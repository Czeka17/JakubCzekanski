import styles from './skills.module.scss'
import SkillsBox from './skillsbox';
function Skills(){
    return <section className={styles.skills} id='skills'>
        <div className={styles.container}>
            <h2 className={styles.skills__title}>Skills & tools</h2>
          <SkillsBox/>
        </div>
    </section>
}
export default Skills;


