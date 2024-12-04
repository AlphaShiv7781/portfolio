import styles from './ContactStyles.module.css' 

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTile'>Contact</h1>
        <br /><br />
        <form action="https://formspree.io/f/xzzbopjb" method='post'>
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder='name' required/>
            </div>

            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="email" id="email" placeholder='email' required/>
            </div>

            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Message
                </label>
                <textarea
                 type="text" 
                 name="message" 
                 id="message" 
                 placeholder='Message' 
                 required/>
            </div>
             <input className='hover btn' type='submit' value="Submit"/>
        </form>
    </section>
  )
}

export default Contact