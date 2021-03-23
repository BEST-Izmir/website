/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import Logo from '../Logo';
import useScrollY from '../../hooks/useScrollY';
import cn from 'classnames';
import { FaBars } from 'react-icons/fa';

function navbar() {
  const scrollY = useScrollY();
  const [transform, setTransform] = useState(undefined);
  const [mobileNav, setMobilNav] = useState(false);

  useEffect(() => {
    if (scrollY > 10 && transform == undefined) {
      setTransform(true);
      setTimeout(() => {
        setTransform(false);
      }, 300);
    } else if (scrollY < 10) {
      setTransform(undefined);
    }
  }, [scrollY]);
  return (
    <nav className={cn(styles['best-izmir-nav'], scrollY > 10 && styles.scrolled, transform && styles.transform, mobileNav && styles.open)}>
      <div className="container">
        <div className={styles['navbar-content']}>
          <Link href="/#hero">
            <a>
              <Logo width="150" height="100" isDark={scrollY > 10 ? false : true} />
            </a>
          </Link>
          <ul className={cn(styles['nav-links'],mobileNav && styles.open)}>
            <li className={styles['nav-item']}>
              <Link href="/#hero">
                <a className={styles['nav-link']}>Anasayfa</a>
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/#about">
                <a className={styles['nav-link']}>Hakkımızda</a>
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/#gallery">
                <a className={styles['nav-link']}>Galeri</a>
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/#team">
                <a className={styles['nav-link']}>Takım</a>
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/#contact">
                <a className={styles['nav-link']}>İletişim</a>
              </Link>
            </li>
          </ul>
          <div className={styles.mobileNav} onClick={e => setMobilNav(prevState => !prevState)}>
            <FaBars size="32" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
