import { motion } from 'framer-motion';
import styles from './About.module.css';

const skills = {
  'Events & Production': ['Event Coordination', 'Logistics Management', 'Venue Operations', 'Volunteer Management', 'Budget Oversight', 'Sponsor Relations'],
  'Public Relations & Communications': ['Media Relations', 'Press Release Writing', 'Crisis Communication', 'Brand Voice', 'Interviewing', 'Social Copy', 'Narrative Development'],
  'Creative Direction': ['Art Direction', 'Visual Storytelling', 'Motion Graphics', 'Color Grading', 'Video Editing', 'Brand Aesthetics'],
};

const pillColors = ['pill-terra', 'pill-blush', 'pill-mint'];

const stats = [
  { num: '3+', label: 'Years experience in events & PR' },
  { num: '4', label: 'Major campaign projects completed' },
  { num: '10K+', label: 'Social media impressions generated' },
  { num: 'UCF', label: 'Student organization leadership' },
];

export default function About() {
  return (
    <main style={{ paddingTop: 'var(--nav-h)' }}>
      {/* About header */}
      <section className={styles.aboutSection}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About me
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Events, stories, and the<br /><em>spaces between.</em>
        </motion.h2>

        <div className={styles.aboutGrid}>
          <motion.div
            className={styles.aboutBody}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I'm <strong>Ryan Brander</strong>, a communications and event production professional 
              based in Orlando, FL. I study at the University of Central Florida and have spent 
              three years immersed in events, public relations, social media strategy, and 
              creative direction.
            </p>
            <p>
              My work spans large-scale campus events, PR campaigns for local organizations, 
              and social content strategy — always with an eye for storytelling that feels 
              authentic rather than manufactured. I believe the best brands don't just 
              communicate, they <strong>create moments.</strong>
            </p>
            <p>
              When I'm not producing events or crafting campaigns, I'm editing video content, 
              exploring visual aesthetics, and looking for the next great story to tell. 
              I'm currently <strong>open to full-time roles</strong> in events, PR, and social media.
            </p>
          </motion.div>

          <div className={styles.statsGrid}>
            {stats.map(({ num, label }, i) => (
              <motion.div
                key={label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.07 }}
              >
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statDesc}>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.skillsSection}>
        <motion.span
          className="section-label"
          style={{ color: 'rgba(189,208,188,0.7)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skill set
        </motion.span>
        <motion.h2
          className="section-title"
          style={{ color: 'var(--cream)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          What I bring<br /><em style={{ color: 'var(--sage-lt)' }}>to the table.</em>
        </motion.h2>

        <div className={styles.skillsGroups}>
          {Object.entries(skills).map(([discipline, items], i) => (
            <motion.div
              key={discipline}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className={styles.skillGroupTitle}>
                <span>Discipline</span>
                {discipline}
              </div>
              <div className={styles.pillWrap}>
                {items.map(skill => (
                  <span key={skill} className={`${styles.pill} ${styles[pillColors[i]]}`}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee} aria-hidden="true">
            {['Events', 'Public Relations', 'Social Media', 'Brand Strategy', 'After Effects', 'Storytelling', 'Creative Direction',
              'Events', 'Public Relations', 'Social Media', 'Brand Strategy', 'After Effects', 'Storytelling', 'Creative Direction'].map((word, i) => (
              <span key={i} className={i % 2 === 1 ? styles.accent : ''}>{i % 2 === 1 ? '✦' : word}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
