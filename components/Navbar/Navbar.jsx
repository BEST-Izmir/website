/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import Logo from '../Logo';
import useScrollY from '../../hooks/useScrollY';
import cn from 'classnames';

function navbar() {
  const scrollY = useScrollY();
  const [transform, setTransform] = useState(undefined);

  useEffect(() => {
    if (scrollY > 10 && transform == undefined) {
      setTransform(true);
      setTimeout(() => {
        setTransform(false);
      }, 150);
    } else if (scrollY < 10) {
      setTransform(undefined);
    }
  }, [scrollY]);
  return (
    <nav className={cn(styles['best-izmir-nav'], scrollY > 10 && styles.scrolled, transform && styles.transform)}>
      <div className="container">
        <div className={styles['navbar-content']}>
          <Logo width="150" height="100" isDark={scrollY > 10 ? false : true} />
          <ul className={styles['nav-links']}>
            <li>
              <Link href="/">
                <a className={styles['nav-link']}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={styles['nav-link']}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a className={styles['nav-link']}>Events</a>
              </Link>
            </li>
            <li>
              <Link href="/teams">
                <a className={styles['nav-link']}>Teams</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={styles['nav-link']}>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
