'use client'

import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            Dedicated educator and project coordinator with a passion for classical studies and community engagement
          </p>
        </div>

        <div className={styles.content}>
          {/* Personal Introduction */}
          <div className={styles.intro}>
            <div className={styles.introCard}>
              <h3>My Journey</h3>
              <p>
                As a Project Coordinator at Indiana University Bloomington, I bring together my passion for 
                education, classical studies, and community collaboration. My work focuses on creating meaningful 
                connections between academic institutions and the broader community, fostering environments where 
                learning and impact intersect.
              </p>
              <p>
                With a strong foundation in Classical Philology and Latin/Greek studies, I&apos;ve dedicated my career 
                to both teaching and coordinating projects that bridge the gap between traditional academic 
                disciplines and modern community needs.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className={styles.education}>
            <h3 className={styles.sectionTitle}>Education</h3>
            
            <div className={styles.educationGrid}>
              {/* Master's Degree */}
              <div className={styles.degreeCard}>
                <div className={styles.degreeHeader}>
                  <h4>Master of Arts for Teachers (MAT)</h4>
                  <span className={styles.institution}>Indiana University Bloomington</span>
                </div>
                <div className={styles.degreeDetails}>
                  <p className={styles.field}>Latin and Greek</p>
                  <div className={styles.activities}>
                    <h5>Activities & Leadership:</h5>
                    <ul>
                      <li>Community of Teachers</li>
                      <li>Graduate and Professional Student Government</li>
                      <li>Social Chair - Classical Studies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bachelor's Degree */}
              <div className={styles.degreeCard}>
                <div className={styles.degreeHeader}>
                  <h4>Bachelor of Arts (BA)</h4>
                  <span className={styles.institution}>The University of Dallas</span>
                </div>
                <div className={styles.degreeDetails}>
                  <p className={styles.field}>Classical Philology</p>
                  <div className={styles.activities}>
                    <h5>Honors & Recognition:</h5>
                    <ul>
                      <li>Phi Beta Kappa Honor Society</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className={styles.skills}>
            <h3 className={styles.sectionTitle}>Areas of Expertise</h3>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <div className={styles.skillIcon}>🎯</div>
                <h4>Project Coordination</h4>
                <p>Expert in managing complex educational initiatives, coordinating between multiple stakeholders, and ensuring successful project outcomes.</p>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.skillIcon}>📚</div>
                <h4>Classical Studies</h4>
                <p>Deep knowledge of Latin, Greek, and Classical Philology with extensive teaching and research experience.</p>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.skillIcon}>🤝</div>
                <h4>Community Engagement</h4>
                <p>Skilled at building bridges between academic institutions and community organizations to create meaningful impact.</p>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.skillIcon}>🎓</div>
                <h4>Education & Teaching</h4>
                <p>Experienced educator with a passion for creating engaging learning environments and supporting student success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
