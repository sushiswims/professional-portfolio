import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>Ryan Brander</span>
      <p>© {new Date().getFullYear()}</p>
      <p>Events · Public Relations · Content</p>
      <div className={styles.links}>
        <a href="mailto:ryanbrander1@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/ryan-brander-0864a7232/" target="_blank" rel="noopener">LinkedIn</a>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
