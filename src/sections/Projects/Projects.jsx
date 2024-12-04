import styles from './ProjectStyles.module.css'
import Clima from '../../assets/Clima.png'
import flash from '../../assets/flash.png'
import BlogFlex from '../../assets/blogflex.png'
import AutoBot from '../../assets/AutoBot.png'
import ChatGPT from '../../assets/ChatGPT .png'
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (
    <section id='project' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <br />
        <div className={styles.projectsContainer}>
          <ProjectCard 
          src={BlogFlex} 
          link="https://github.com/AlphaShiv7781/BlogFlex" 
          alt="BlogFlex Logo"
          className='hover'
          heading='BlogFlex'
          paragraph='Blogging web application'
          />

          <ProjectCard 
          src={AutoBot} 
          link="https://github.com/AlphaShiv7781/AutoBot" 
          alt="AutoBot Logo"
          className='hover'
          heading='AutoBot'
          paragraph='AI Powered Flutter App'
          />

          <ProjectCard 
          src={ChatGPT} 
          link="https://github.com/AlphaShiv7781/ChatGPT" 
          alt="ChatGPT Logo"
          className='hover'
          heading='ChatGPT'
          paragraph='ChatGPT Mobile App using Flutter'
          />

          <ProjectCard 
          src={flash} 
          link="https://github.com/AlphaShiv7781/FlashChat" 
          alt="FlashChat Logo"
          className='hover'
          heading='FlashChat'
          paragraph='Community Chat App using Flutter'
          />

          <ProjectCard 
          src={Clima} 
          link="https://github.com/AlphaShiv7781/Clima-Weather-App" 
          alt="Clima Logo"
          className='hover'
          heading='Clima'
          paragraph='Weather App using Flutter'
          />
        </div>
        </section>
  )
}

export default Projects

