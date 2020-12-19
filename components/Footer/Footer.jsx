import { RiFacebookCircleLine, RiInstagramLine, RiLinkedinLine,RiGithubLine } from 'react-icons/ri';
import styles from './Footer.module.scss';
import Link from 'next/link';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles['footer-content']}>
          <div className={styles.social}>
            <Link href="https://www.facebook.com/BEST.IZMIR">
              <a>
                <RiFacebookCircleLine size="32" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/best.izmir/">
              <a>
                <RiInstagramLine size="32" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/bestizmir/">
              <a>
                <RiLinkedinLine size="32" />
              </a>
            </Link>
            <Link href="https://github.com/BEST-Izmir">
              <a>
                <RiGithubLine size="32" />
              </a>
            </Link>
          </div>
          <span className={styles.copyright}>Copyright 2020. BEST Izmir</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
