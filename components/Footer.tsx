'use client'

import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Main Footer Content */}
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <h3 className={styles.brandName}>Maria</h3>
              <p className={styles.brandTagline}>
                Project Coordinator & Educator
              </p>
              <p className={styles.brandDescription}>
                Creating meaningful connections between academia and community through 
                collaborative projects and educational initiatives.
              </p>
            </div>
            
            <div className={styles.footerLinks}>
              <div className={styles.linkGroup}>
                <h4>Navigation</h4>
                <ul>
                  <li>
                    <button onClick={() => {
                      const element = document.getElementById('hero')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}>
                      Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {
                      const element = document.getElementById('about')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}>
                      About
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {
                      const element = document.getElementById('experience')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}>
                      Experience
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {
                      const element = document.getElementById('projects')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}>
                      Projects
                    </button>
                  </li>
                  <li>
                    <button onClick={() => {
                      const element = document.getElementById('contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}>
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              
              <div className={styles.linkGroup}>
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href="mailto:maria@example.com">Email</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/maria-example" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/maria-example" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className={styles.linkGroup}>
                <h4>Expertise</h4>
                <ul>
                  <li>Project Coordination</li>
                  <li>Educational Initiatives</li>
                  <li>Classical Studies</li>
                  <li>Community Engagement</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Back to Top Button */}
          <div className={styles.backToTop}>
            <button onClick={scrollToTop} className={styles.topButton}>
              <span className={styles.topIcon}>↑</span>
              Back to Top
            </button>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Maria. All rights reserved.
            </p>
            <p className={styles.built}>
              Built with Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
