import styles from './projects.module.scss'
import keanu from '../public/images/keanu.png'
import Image from 'next/image';
import ProjectItem from './projectItem';
import projects from '../projects/projects.json'
function Projects(){
    const backgroundColors = ['#116D6E', '#321E1E', '#4E3636', '#CD1818'];
    
    return <section className={styles.projects}>
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
              />
            </div>
          );
        })}
           </div>
    </section>
}
export default Projects;