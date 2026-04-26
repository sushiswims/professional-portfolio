import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.';
  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
};

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (touched[name]) {
      const errs = validate({ ...fields, [name]: value });
      setErrors(prev => ({ ...prev, [name]: errs[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    const errs = validate(fields);
    setErrors(prev => ({ ...prev, [name]: errs[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <main style={{ paddingTop: 'var(--nav-h)' }}>
      <section className={styles.contactSection}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in touch
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          If something good is happening,<br /><em>let's talk.</em>
        </motion.h2>
        <motion.p
          className={styles.contactSub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Open to full-time roles in events, public relations, and social media. Available now.
        </motion.p>

        <div className={styles.contactGrid}>
          {/* Contact info */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <a href="mailto:ryanbrander1@gmail.com" className={styles.emailLink}>
              ryanbrander1@gmail.com
            </a>
            <div className={styles.contactLinks}>
              <a href="tel:5612677488" className={styles.contactLink}>
                <span className={styles.contactIcon}>📞</span>
                (561) 267-7488
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-brander-0864a7232/"
                target="_blank"
                rel="noopener"
                className={styles.contactLink}
              >
                <span className={styles.contactIcon}>🔗</span>
                LinkedIn
              </a>
            </div>

            <div className={styles.availability}>
              <span className={styles.availDot} />
              Available for new opportunities
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                className={styles.successCard}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className={styles.successIcon}>✓</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  className="btn btn-ghost"
                  onClick={() => { setSubmitted(false); setFields({ name: '', email: '', subject: '', message: '' }); setTouched({}); }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`}
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && <span className={styles.errorMsg}>{errors.name}</span>}
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`}
                      placeholder="your@email.com"
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={`${styles.input} ${errors.subject && touched.subject ? styles.inputError : ''}`}
                    placeholder="What's this about?"
                    value={fields.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.subject && touched.subject && <span className={styles.errorMsg}>{errors.subject}</span>}
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${styles.input} ${styles.textarea} ${errors.message && touched.message ? styles.inputError : ''}`}
                    placeholder="Tell me what you're working on..."
                    value={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.message && touched.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
