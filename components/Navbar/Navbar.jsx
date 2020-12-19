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
          <Link href="/#hero">
            <a>
              <Logo width="150" height="100" isDark={scrollY > 10 ? false : true} />
            </a>
          </Link>
          <ul className={styles['nav-links']}>
            <li>
              <Link href="/#hero">
                <a className={styles['nav-link']}>Anasayfa</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a className={styles['nav-link']}>Hakkımızda</a>
              </Link>
            </li>
            <li>
              <Link href="/#gallery">
                <a className={styles['nav-link']}>Galeri</a>
              </Link>
            </li>
            <li>
              <Link href="/#team">
                <a className={styles['nav-link']}>Takım</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a className={styles['nav-link']}>İletişim</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
