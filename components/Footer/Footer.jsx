import { RiFacebookCircleLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import styles from './Footer.module.scss';
import Link from 'next/link';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles['footer-content']}>
          <div className={styles.social}>
            <Link href="http://google.com">
              <a>
                <RiFacebookCircleLine size="32" />
              </a>
            </Link>
            <Link href="http://google.com">
              <a>
                <RiInstagramLine size="32" />
              </a>
            </Link>
            <Link href="http://google.com">
              <a>
                <RiTwitterLine size="32" />
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
