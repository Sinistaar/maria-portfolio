'use client'

import Image from 'next/image'
import styles from './Hero.module.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Profile Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/profile.png"
              alt="Maria - Project Coordinator"
              width={300}
              height={300}
              className={styles.profileImage}
              priority
            />
          </div>

          {/* Hero Content */}
          <div className={styles.textContent}>
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span>Hello, I&apos;m</span>
            </div>
            
            <h1 className={styles.name}>Maria</h1>
            
            <h2 className={styles.role}>
              Project Coordinator at Indiana University Bloomington
            </h2>
            
            <div className={styles.subtitle}>
              Project Coordinator | Accelerating the Transformation of Bloomington&apos;s Trades District
            </div>
            
            <p className={styles.tagline}>
              Passionate about coordinating projects, teaching, and creating impact through 
              meaningful collaboration between educational institutions and communities.
            </p>

            {/* Call to Action Buttons */}
            <div className={styles.actions}>
              <button 
                onClick={scrollToContact}
                className="btn"
              >
                Get In Touch
              </button>
              <button 
                onClick={scrollToAbout}
                className="btn btn-outline"
              >
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Teaching</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>Degrees</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>Major Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
