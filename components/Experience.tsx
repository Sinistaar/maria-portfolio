'use client'

import styles from './Experience.module.css'

interface ExperienceItem {
  company: string
  role: string
  duration: string
  description: string
  current?: boolean
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Indiana University Bloomington",
      role: "Project Coordinator – College and Community Collaboration Grant",
      duration: "Mar 2025 – Present (7 mos)",
      description: "Leading collaborative initiatives between the university and local communities, managing grant-funded projects, and coordinating cross-functional teams to maximize educational and community impact.",
      current: true
    },
    {
      company: "Indiana University Bloomington",
      role: "Student Services Coordinator – Intensive First-Year Seminars",
      duration: "May 2023 – Mar 2025 (1 yr 11 mos)",
      description: "Coordinated comprehensive student support services for intensive first-year seminars, managed student enrollment and academic progress, and collaborated with faculty to enhance the first-year student experience."
    },
    {
      company: "Indiana University Bloomington",
      role: "Student Services Coordinator – Individualized Major Program",
      duration: "Feb 2019 – May 2023 (4 yrs 4 mos)",
      description: "Provided full-time coordination of student services for the Individualized Major Program, supporting students in creating personalized academic pathways, managing program requirements, and facilitating interdisciplinary learning experiences."
    },
    {
      company: "Indiana University Bloomington",
      role: "Adjunct Instructor – Classical Studies",
      duration: "Jan 2020 – May 2025 (5 yrs 5 mos)",
      description: "Taught undergraduate courses in Classical Studies, Latin, and Greek. Developed curriculum, mentored students, and contributed to departmental initiatives while maintaining high teaching standards and student engagement."
    },
    {
      company: "Author Solutions, LLC",
      role: "Content Evaluator",
      duration: "Apr 2018 – Feb 2019 (11 mos)",
      description: "Evaluated and reviewed written content for quality, accuracy, and adherence to publishing standards. Provided detailed feedback to authors and collaborated with editorial teams to ensure high-quality publications."
    },
    {
      company: "Indiana University Bloomington",
      role: "Associate Instructor – Classical Studies",
      duration: "Aug 2015 – May 2018 (2 yrs 10 mos)",
      description: "Served as an associate instructor while pursuing graduate studies, teaching introductory Classical Studies courses, grading assignments, and supporting faculty in course management and student mentorship."
    }
  ]

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Professional Experience</h2>
          <p className={styles.subtitle}>
            A journey through education, coordination, and community engagement
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={`${styles.markerDot} ${exp.current ? styles.currentRole : ''}`}>
                  {exp.current && <div className={styles.pulse}></div>}
                </div>
                {index !== experiences.length - 1 && <div className={styles.timelineLine}></div>}
              </div>
              
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <div className={styles.duration}>
                    {exp.current && <span className={styles.currentBadge}>Current</span>}
                    <span className={styles.durationText}>{exp.duration}</span>
                  </div>
                </div>
                
                <div className={styles.cardBody}>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className={styles.certifications}>
          <h3 className={styles.sectionTitle}>Licenses & Certifications</h3>
          
          <div className={styles.certificationCard}>
            <div className={styles.certificationHeader}>
              <div className={styles.certIcon}>🏆</div>
              <div className={styles.certInfo}>
                <h4>Kelley School of Business Executive Education: Project Management Digital Badge</h4>
                <p className={styles.certIssuer}>Indiana University</p>
              </div>
            </div>
            <div className={styles.certDetails}>
              <div className={styles.certMeta}>
                <span className={styles.certDate}>Issued Jul 2025</span>
                <span className={styles.certId}>Credential ID: 6888c6f1b97d4c020d841ad2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className={styles.skillsSummary}>
          <h3 className={styles.sectionTitle}>Core Competencies</h3>
          
          <div className={styles.skillsContainer}>
            <div className={styles.skillTag}>Project Management</div>
            <div className={styles.skillTag}>Educational Coordination</div>
            <div className={styles.skillTag}>Community Engagement</div>
            <div className={styles.skillTag}>Classical Studies</div>
            <div className={styles.skillTag}>Teaching & Instruction</div>
            <div className={styles.skillTag}>Grant Management</div>
            <div className={styles.skillTag}>Student Services</div>
            <div className={styles.skillTag}>Content Evaluation</div>
            <div className={styles.skillTag}>Cross-functional Collaboration</div>
            <div className={styles.skillTag}>Academic Administration</div>
          </div>
        </div>

        {/* Integrated Contact Section */}
        <div className={styles.contactIntegration}>
          <h3 className={styles.sectionTitle}>Let&apos;s Connect</h3>
          
          <div className={styles.contactQuick}>
            <div className={styles.contactMethod}>
              <div className={styles.contactIcon}>✉️</div>
              <a href="mailto:maria@example.com" className={styles.contactLink}>
                maria@example.com
              </a>
            </div>
            
            <div className={styles.contactMethod}>
              <div className={styles.contactIcon}>💼</div>
              <a 
                href="https://linkedin.com/in/maria-example" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                LinkedIn Profile
              </a>
            </div>
            
            <div className={styles.contactMethod}>
              <div className={styles.contactIcon}>🔗</div>
              <a 
                href="https://github.com/maria-example" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                GitHub Projects
              </a>
            </div>
          </div>
          
          <div className={styles.contactCta}>
            <p>Ready to collaborate on meaningful projects? I&apos;d love to hear from you.</p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
