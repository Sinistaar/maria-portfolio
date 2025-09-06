import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      
      {/* Puzzle-piece grid layout */}
      <div className={styles.puzzleGrid}>
        <div className={styles.container}>
          <div className={styles.gridLayout}>
            {/* Large About section - spans 2 columns */}
            <div className={`${styles.gridItem} ${styles.aboutSection}`}>
              <About />
            </div>
            
            {/* Experience timeline - tall right section */}
            <div className={`${styles.gridItem} ${styles.experienceSection}`}>
              <Experience />
            </div>
            
            {/* Projects showcase - wide bottom section */}
            <div className={`${styles.gridItem} ${styles.projectsSection}`}>
              <Projects />
            </div>
            
            {/* Contact - mobile only */}
            <div className={`${styles.gridItem} ${styles.contactSection}`}>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
