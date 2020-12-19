import React from 'react';
import styles from './Hero.module.scss';
import Logo from '../Logo';

function Hero(props) {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles['hero-content']}>
        <Logo width="500" height="300" isDark={false}/>
        <h1 className={styles['hero-title']}>BOARD OF EUROPEAN STUDENTS OF TECHNOLOGY</h1>
        <h3 className={styles['hero-subtitle']}>LOKAL GRUP Izmir</h3>
      </div>
    </div>
  );
}

export default Hero;
