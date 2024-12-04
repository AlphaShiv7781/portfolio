import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import leetcodeIcon from '../../assets/Leetcode.svg'
import gfgIcon from '../../assets/gfg.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const {theme , toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return  <section id="hero" className={styles.container}>


    <div className={styles.colorModeContainer}> 

      <img 
      className={styles.hero} 
      src={heroImg} 
      alt="Profile picture of Shivam Sharma" 
      />

      <img 
      className={styles.colorMode} 
      src={themeIcon} 
      alt="Color mode icon" 
      onClick={toggleTheme}
      />

    </div>

    <div className={styles.info}>

      <h1>Shivam<br/>Sharma</h1>

      <h2>Software Developer</h2>
      <span>
        <a href="https://x.com/ShivamSharma_27" target='_blank'>
        <img src={twitterIcon} alt="Twitter icon" />
        </a>

        <a href="https://github.com/AlphaShiv7781" target='_blank'>
        <img src={githubIcon} alt="Github icon" />
        </a>

        <a href="https://www.linkedin.com/in/shivam-sharma-shivamsharmaprofile/" target='_blank'>
        <img src={linkedinIcon} alt="Linkedin icon" />
        </a>

        <a href="https://leetcode.com/u/Shiv_2706/" target='_blank'>
        <img src={leetcodeIcon} alt="Leetcode icon" />
        </a>

        <a href="https://www.geeksforgeeks.org/user/shivamsharma242424/" target='_blank'>
        <img src={gfgIcon} alt="GFG icon" />
        </a>
      </span>
         
         <p className={styles.description}>Passionate about crafting intuitive Flutter apps and scalable web solutions, I build efficient, user-centric applications that address real-world needs.</p>
         
         <a href={CV} download>
          <button className="hover" >Resume</button>
         </a>
    </div>

  </section>
  
}

export default Hero