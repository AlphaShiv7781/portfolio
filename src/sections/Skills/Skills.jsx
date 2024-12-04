import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
function Skills() {
 

  return (
    <section id='skills' className={styles.container}>
    <h1 className='sectionTile' >Skills</h1>  
    <br /><br /> 
    <div className={styles.skillList}>
        
        <SkillList src={checkMarkIcon} skill="Flutter" img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="Django" img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="Nodejs" img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="React" img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="Java"img={styles.img}/>
        
        </div> 
        <hr />
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C" img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="Python"img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="Javascript"img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="Dart" img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="HTML"img={styles.img}/>
        </div> 
        <hr />
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="CSS" img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="MongoDB"img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="PostgreSQL"img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="Firebase"img={styles.img}/>
        <SkillList src={checkMarkIcon} skill="Postman"img={styles.img}/>
        </div> 
    </section>
  )
}

export default Skills