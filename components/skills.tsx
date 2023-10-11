import SkillCard from './skillCard';
import styles from './skills.module.scss'
function Skills(){
    return <section className={styles.skills}>
        <div className={styles.container}>
            <h2 className={styles.skills__title}>Skills</h2>
           <div className={styles.skills__grid}>
                <SkillCard title='Styling' expertise={['SCSS', 'CSS','Tailwind CSS', 'Bootstrap']}/>
                <SkillCard title='Web development' expertise={['HTML','ReactJS','Nextjs']}/>
                <SkillCard title='Backend' expertise={['Mongodb', 'Firebase']}/>
                <SkillCard title='Mobile' expertise={['React Native', 'Expo']}/>
                <SkillCard title='Testing' expertise={['Postman', 'React testing library', 'Jest']}/>
                <SkillCard title='Version Control and Collaboration' expertise={['Git', 'Github']}/>
            </div>
        </div>
    </section>
}
export default Skills;


