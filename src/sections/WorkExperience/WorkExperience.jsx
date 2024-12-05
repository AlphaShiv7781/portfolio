import React from 'react';
import styles from './WorkExperienceStyles.module.css';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Flutter Developer Intern',
      company: 'Evening Coder',
      duration: 'Jan 2023 - May 2023',
      description: [
        'Developed a mobile application using Flutter for real-time tracking.',
        'Integrated APIs to enhance user engagement and functionality.',
        'Collaborated with the design team to improve UI/UX.'
      ],
    },
    // You can add more experiences here
  ];

  return (
    <section id="work-experience" className={styles.container}>
      <h1 className="sectionTile">Work Experience</h1>
      <br /> <br />
      <div className={styles.experiences}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experience}>
            <h2>{exp.title}</h2>
            <h3 className={styles.company}>{exp.company}</h3>
            <p className={styles.duration}>{exp.duration}</p>
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
