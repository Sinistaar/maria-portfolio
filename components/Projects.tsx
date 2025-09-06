'use client'

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Project</h2>
          <p className={styles.subtitle}>
            Showcasing impactful initiatives that bridge academia and community
          </p>
        </div>

        {/* Main Featured Project */}
        <div className={styles.featuredProject}>
          <div className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <div className={styles.projectIcon}>🏛️</div>
              <div className={styles.projectMeta}>
                <h3 className={styles.projectTitle}>IU Economic Development Summit</h3>
                <div className={styles.projectDetails}>
                  <span className={styles.projectDate}>August 2025</span>
                  <span className={styles.projectLocation}>Indiana University Bloomington</span>
                  <span className={styles.projectRole}>Project Contributor</span>
                </div>
              </div>
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectDescription}>
                <h4>Project Overview</h4>
                <p>
                  The IU Economic Development Summit represents a landmark initiative bringing together 
                  leaders from business, government, and higher education. As a key project contributor, 
                  I played an integral role in establishing this high-impact forum that has become a 
                  cornerstone event for economic development collaboration.
                </p>
              </div>

              <div className={styles.projectHighlights}>
                <h4>Key Contributions & Achievements</h4>
              <div className={styles.highlightsList}>
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>📋</div>
                  <div className={styles.highlightContent}>
                    <h5>Event Logistics Coordination</h5>
                    <p>Coordinated comprehensive event logistics to ensure a seamless experience for attendees, speakers, and partners throughout the summit</p>
                  </div>
                </div>
                
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🎯</div>
                  <div className={styles.highlightContent}>
                    <h5>Program Selection & Review</h5>
                    <p>Supported program selection by actively contributing to the proposal collection, review and ranking process</p>
                  </div>
                </div>
                
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>🤝</div>
                  <div className={styles.highlightContent}>
                    <h5>Key Presenter Liaison</h5>
                    <p>Served as primary liaison, communicating with presenters to align content with summit goals and objectives</p>
                  </div>
                </div>
                
                <div className={styles.highlight}>
                  <div className={styles.highlightIcon}>💼</div>
                  <div className={styles.highlightContent}>
                    <h5>Visual Presentation Design</h5>
                    <p>Designed and managed the comprehensive PowerPoint deck displayed throughout the entire event</p>
                  </div>
                </div>
              </div>
              </div>

              <div className={styles.projectImpact}>
                <h4>Impact & Results</h4>
                <div className={styles.impactMetrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>Sold Out</div>
                    <div className={styles.metricLabel}>Inaugural Event</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>100%</div>
                    <div className={styles.metricLabel}>Stakeholder Engagement</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricValue}>3 Sectors</div>
                    <div className={styles.metricLabel}>Business, Gov, Higher-Ed</div>
                  </div>
                </div>
                
                <div className={styles.impactDescription}>
                  <p>
                    The summit&apos;s remarkable success exceeded all expectations, with the inaugural program 
                    selling out and surpassing capacity in its first year. This achievement established 
                    the summit as a high-impact forum for business, government, and higher-ed leaders, 
                    creating lasting connections and setting the foundation for ongoing partnerships 
                    that continue to drive regional economic development and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Skills & Technologies */}
        <div className={styles.projectSkills}>
          <h3 className={styles.skillsTitle}>Project Management Skills Demonstrated</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>
              <div className={styles.skillIcon}>🎯</div>
              <span>Strategic Planning</span>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillIcon}>📊</div>
              <span>Event Coordination</span>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillIcon}>🤝</div>
              <span>Stakeholder Management</span>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillIcon}>📈</div>
              <span>Program Development</span>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillIcon}>💬</div>
              <span>Cross-Sector Collaboration</span>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillIcon}>⚡</div>
              <span>Results-Driven Execution</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.projectCta}>
          <div className={styles.ctaContent}>
            <h3>Interested in Collaboration?</h3>
            <p>
              I&apos;m always excited to work on projects that create meaningful connections between 
              educational institutions and communities. Let&apos;s discuss how we can work together.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
