import styles from './projects.module.scss'
import ProjectItem from './projectItem';
import projects from '../projects/projects.json'
function Projects(){
    const backgroundColors = ['#2f2f2f','#434343', '#575757', '#6C6C6C', '#CD1818'];
    
    return <section className={styles.projects} id='projects'>
           <div className={styles.projects__box}>
           <h2 className={styles.projects__title}>Projects</h2>
           {projects.projects.map((project, index) => {
          const backgroundColor = backgroundColors[index % backgroundColors.length];

          return (
            <div
              key={index}
              style={{ backgroundColor }}
            >
              <ProjectItem
                title={project.name}
                description={project.description}
                techstack={project.techstack}
                imageUrl={project.imageUrl}
                videoUrl={project.videoUrl}
                codeUrl={project.codeUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          );
        })}
           </div>
    </section>
}
export default Projects;