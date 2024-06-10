import styles from './projects.module.scss'
import ProjectItem from './projectItem';
import projects from '../projects/projects.json'
function Projects(){

    
    return <section className={styles.projects} id='projects'>
           <div className={styles.projects__box}>
           <h2 className={styles.projects__title} data-aos="fade-up">Projects</h2>
          <div className={styles.projects__grid}>
          {projects.projects.map((project, index) => {


          return (
            <div
              key={index}
            >
              <ProjectItem
                title={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          );
        })}
          </div>
           </div>
    </section>
}
export default Projects;