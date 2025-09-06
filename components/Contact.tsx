'use client'

import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let&apos;s Connect</h2>
          <p className={styles.subtitle}>
            Ready to collaborate on meaningful projects? I&apos;d love to hear from you.
          </p>
        </div>

        <div className={styles.content}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Get In Touch</h3>
              <p>
                Whether you&apos;re interested in collaborating on educational initiatives, 
                discussing project coordination opportunities, or exploring ways to bridge 
                academia and community impact, I&apos;m always open to meaningful conversations.
              </p>
              
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>✉️</div>
                  <div className={styles.methodContent}>
                    <h4>Email</h4>
                    <a href="mailto:maria@example.com" className={styles.contactLink}>
                      maria@example.com
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>💼</div>
                  <div className={styles.methodContent}>
                    <h4>LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/maria-example" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>🔗</div>
                  <div className={styles.methodContent}>
                    <h4>GitHub</h4>
                    <a 
                      href="https://github.com/maria-example" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <div className={styles.formCard}>
              <h3>Send a Message</h3>
              <p>Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
              
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className={styles.input}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className={styles.input}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className={styles.input}
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={6}
                    className={styles.textarea}
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                
                <button type="submit" className={`${styles.submitBtn} btn`}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🎯</div>
              <h4>Project Collaboration</h4>
              <p>Interested in educational initiatives and community engagement projects</p>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🏫</div>
              <h4>Academic Partnerships</h4>
              <p>Open to consulting and coordination opportunities with educational institutions</p>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>💬</div>
              <h4>Speaking Engagements</h4>
              <p>Available for talks on project management and classical studies integration</p>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🤝</div>
              <h4>Professional Networking</h4>
              <p>Always excited to connect with fellow educators and project coordinators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
