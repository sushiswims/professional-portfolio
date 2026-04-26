import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }
  })
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut', delay: i * 0.12 }
  })
};

export default function Home() {
  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('progress');
    if (!bar) return;
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (window.scrollY / total * 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <div id="progress" style={{ position:'fixed', top:0, left:0, height:'2px', background:'var(--sage)', zIndex:200, width:'0%', transition:'width 0.1s linear' }} />

      {/* Hero */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBlob1} />
        <div className={styles.heroBlob2} />

        <div className={styles.heroLayout}>
          <motion.div className={styles.heroInner} initial="hidden" animate="visible">
            <motion.span className={styles.heroTag} variants={fadeUp} custom={0}>
              Events · PR · Content
            </motion.span>

            <motion.h1 className={styles.heroName} variants={fadeUp} custom={1}>
              Ryan<br />
              <em>Brander</em>
            </motion.h1>

            <motion.p className={styles.heroTagline} variants={fadeUp} custom={2}>
              I create <strong>experiences people talk about</strong> — from large-scale campus events
              and PR campaigns to social content that actually lands.
            </motion.p>

            <motion.div className={styles.heroCta} variants={fadeUp} custom={3}>
              <Link to="/projects" className="btn btn-primary">View My Work →</Link>
              <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroPhotoWrap}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16,1,0.3,1], delay: 0.3 }}
          >
            <div className={styles.heroPhotoFrame}>
            <img
  src={`${import.meta.env.BASE_URL}images/hero/1.jpg`}
  alt="Ryan Brander"
  className={styles.heroPhoto}
/>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span className={styles.scrollLine} />
          scroll to explore
        </motion.div>
      </section>

      {/* Quick highlights */}
      <section className={styles.highlights}>
        <div className={styles.highlightsGrid}>
          {[
            { num: '3+', label: 'Years in Events & PR' },
            { num: '4', label: 'Major Campaign Projects' },
            { num: '10K+', label: 'Social Media Reach' },
            { num: '100+', label: 'Event Attendees Managed' },
          ].map(({ num, label }, i) => (
            <motion.div
              key={label}
              className={styles.highlightCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16,1,0.3,1] }}
            >
              <span className={styles.highlightNum}>{num}</span>
              <span className={styles.highlightLabel}>{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brief intro strip */}
      <section className={styles.intro}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who I am
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Storyteller. Event producer.<br /><em>Brand builder.</em>
        </motion.h2>
        <motion.p
          className={styles.introCopy}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Based in Orlando, I've spent the last three years building moments that matter — 
          coordinating large-scale events at UCF, managing PR campaigns for local organizations, 
          and crafting social content that resonates with real audiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/about" className="btn btn-ghost" style={{ marginTop: '40px' }}>
            Learn more about me →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
