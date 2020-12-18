/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import Logo from '../Logo';

function navbar() {
  return (
    <nav className={styles['best-izmir-nav']}>
      <div className="container">
        <div className={styles['navbar-content']}>
          <Logo width="150" height="100" isDark={true} />
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
