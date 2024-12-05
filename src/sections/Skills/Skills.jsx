import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import cIcon from '../../assets/c.svg'
import cssIcon from '../../assets/css.svg'
import djangoIcon from '../../assets/django.svg'
import firebaseIcon from '../../assets/firebase.svg'
import flutterIcon from '../../assets/flutter.svg'
import htmlIcon from '../../assets/html.svg'
import javaIcon from '../../assets/java.svg'
import javascriptIcon from '../../assets/javascript.svg'
import mongoDbIcon from '../../assets/mongodb.svg'
import nodejsIcon from '../../assets/nodejs.svg'
import postgresqlIcon from '../../assets/postgresql.svg'
import postmanIcon from '../../assets/postman.svg'
import pythonIcon from '../../assets/python.svg'
import reactIcon from '../../assets/reactjs.svg'
import dartIcon from '../../assets/dart.svg'
import SkillList from '../../common/SkillList'
function Skills() {
 

  return (
    <section id='skills' className={styles.container}>
    <h1 className='sectionTile' >Skills</h1>  
    <br /><br /> 
    <div className={styles.skillList}>
        
        <SkillList src={flutterIcon} skill="Flutter" img={styles.img}/>
        <SkillList src={djangoIcon} skill="Django" img={styles.img}/>
        <SkillList src={nodejsIcon} skill="Nodejs" img={styles.img}/>
        <SkillList src={reactIcon} skill="React" img={styles.img}/>
        <SkillList src={javaIcon} skill="Java"img={styles.img}/>
        
        </div> 
        <hr />
        <div className={styles.skillList}>
        <SkillList src={cIcon} skill="C" img={styles.img}/>
        <SkillList src={pythonIcon} skill="Python"img={styles.img}/>
        <SkillList src={javascriptIcon} skill="Javascript"img={styles.img}/>
        <SkillList src={dartIcon} skill="Dart" img={styles.img}/>
        <SkillList src={htmlIcon} skill="HTML"img={styles.img}/>
        </div> 
        <hr />
        <div className={styles.skillList}>
        <SkillList src={cssIcon} skill="CSS" img={styles.img}/>
        <SkillList src={mongoDbIcon} skill="MongoDB"img={styles.img}/>
        <SkillList src={postgresqlIcon} skill="PostgreSQL"img={styles.img}/>
        <SkillList src={firebaseIcon} skill="Firebase"img={styles.img}/>
        <SkillList src={postmanIcon} skill="Postman"img={styles.img}/>
        </div> 
    </section>
  )
}

export default Skills