'use client'

import { useState } from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo/Name */}
        <div className={styles.logo}>
          <button 
            onClick={() => scrollToSection('hero')}
            className={styles.logoButton}
          >
            Maria
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navList}>
          <li>
            <button onClick={() => scrollToSection('hero')} className={styles.navLink}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className={styles.navLink}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('experience')} className={styles.navLink}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <ul className={styles.mobileNavList}>
            <li>
              <button onClick={() => scrollToSection('hero')} className={styles.mobileNavLink}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className={styles.mobileNavLink}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')} className={styles.mobileNavLink}>
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className={styles.mobileNavLink}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className={styles.mobileNavLink}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
