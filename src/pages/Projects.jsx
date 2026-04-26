import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    id: 'cs1',
    num: '01',
    company: 'UCF Campus Events',
    name: 'Survivor UCF',
    tag: 'Event Production',
    color: 'terra',
    description: "A large-scale, reality-TV-style competitive event held on UCF's campus, bringing together hundreds of students in themed challenges across multiple days.",
    role: 'Served as lead event coordinator — managed logistics, volunteer teams, scheduling, and on-day production to ensure a smooth, high-energy experience.',
    outcome: 'Sold-out attendance, overwhelmingly positive participant feedback, and recognition from student government for outstanding event execution.',
    images: [
      '/images/survivor-ucf/2.jpg',
'/images/survivor-ucf/3.jpg',
'/images/survivor-ucf/4.jpg',
'/images/survivor-ucf/5.jpg',
'/images/survivor-ucf/5b.jpg',
'/images/survivor-ucf/6.jpg',
    ],
    link: null,
  },
  {
    id: 'cs2',
    num: '02',
    company: 'Strike Magazine',
    name: 'Strike Magazine UCF',
    tag: 'PR & Content',
    color: 'sage',
    description: "UCF's independent fashion and culture publication. Contributed editorial strategy, visual storytelling, and social copy to amplify the magazine's brand presence on campus and online.",
    role: 'Developed content calendar, wrote editorial copy, coordinated photoshoots, and managed social media channels to grow audience engagement.',
    outcome: 'Increased Instagram engagement and built a stronger pipeline between editorial content and social media amplification for the publication.',
    images: [
     '/images/strike-magazine/7.jpg',
'/images/strike-magazine/8.jpg',
'/images/strike-magazine/9.jpg',
'/images/strike-magazine/10.jpg',
    ],
    link: null,
  },
  {
    id: 'cs3',
    num: '03',
    company: 'Toho Water Authority',
    name: 'Toho Water Authority',
    tag: 'PR Campaign',
    color: 'sand',
    description: "A public relations project supporting Toho Water Authority's community outreach and communications strategy for Central Florida residents.",
    role: 'Developed PR materials, drafted press communications, and helped shape messaging strategy for community-facing campaigns.',
    outcome: "Delivered a cohesive communications package that aligned with the organization's public-facing goals and stakeholder expectations.",
    images: [
     '/images/toho-water-authority/2.jpeg',
'/images/toho-water-authority/16.png',
'/images/toho-water-authority/17.png',
    ],
    link: null,
  },
  {
    id: 'cs4',
    num: '04',
    company: 'Social Media',
    name: 'Social Media & Content Creation',
    tag: 'Creative Direction',
    color: 'terra',
    description: 'An ongoing body of social content, video edits, and analytics work produced for personal and client brands — focused on authentic storytelling through short-form video and curated feeds.',
    role: 'Shot, edited, and published video content using Adobe After Effects and Premiere Pro; managed performance analytics and community engagement.',
    outcome: '10,000+ impressions across content, with measurable growth in follower engagement and consistent aesthetic across platforms.',
    images: [
'/images/social-media/13.jpg',
'/images/social-media/14.jpg',
    ],
    link: null,
  },
];

const colorMap = {
  terra: { bg: 'var(--terra-lt)', tag: 'rgba(35,24,16,0.09)' },
  sage:  { bg: 'var(--sage-lt)',  tag: 'rgba(35,24,16,0.09)' },
  sand:  { bg: 'var(--sand)',     tag: 'rgba(35,24,16,0.09)' },
};

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <main style={{ paddingTop: 'var(--nav-h)' }}>
      <section className={styles.projectsSection}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Selected work
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Projects that<br /><em>moved the needle.</em>
        </motion.h2>

        <div className={styles.caseStudies}>
          {projects.map((project, i) => {
            const isOpen = openId === project.id;
            const colors = colorMap[project.color];

            return (
              <motion.div
                key={project.id}
                className={styles.caseStudy}
                style={{ background: colors.bg }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div
                  className={styles.caseHeader}
                  style={{ background: colors.bg }}
                  onClick={() => toggle(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && toggle(project.id)}
                >
                  <span className={styles.caseNum}>{project.num}</span>
                  <div className={styles.caseTitleRow}>
                    <span className={styles.caseCompany}>{project.company}</span>
                    <span className={styles.caseName}>{project.name}</span>
                  </div>
                  <span className={styles.caseTag} style={{ background: colors.tag }}>{project.tag}</span>
                  <span className={styles.caseExpandHint}>expand</span>
                  <span className={`${styles.caseToggle} ${isOpen ? styles.caseToggleOpen : ''}`}>+</span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.caseBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={styles.galleryStrip}>
                        {project.images.map((src, j) => (
                          <img key={j} src={src} alt={`${project.name} ${j + 1}`} />
                        ))}
                      </div>

                      <div className={styles.caseContent}>
                        <div className={styles.caseCol}>
                          <p className={styles.caseColLabel}>Overview</p>
                          <p>{project.description}</p>
                        </div>
                        <div className={styles.caseCol}>
                          <p className={styles.caseColLabel}>My Role</p>
                          <p>{project.role}</p>
                        </div>
                        <div className={styles.caseCol}>
                          <p className={styles.caseColLabel}>Outcome</p>
                          <p>{project.outcome}</p>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener" className={`btn btn-primary ${styles.caseLink}`}>
                              View Project
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
