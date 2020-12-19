import React from 'react';
import styles from './Hero.module.scss';
import Logo from '../Logo';

function Hero(props) {
  return (
    <div className={styles.hero}>
      <div className={styles['hero-content']}>
        <Logo width="500" height="300" isDark={false}/>
        <h1 className={styles['hero-title']}>BOARD OF EUROPEAN STUDENTS OF TECHNOLOGY</h1>
        <h2 className={styles['hero-subtitle']}>LOCAL GROUP Izmir</h2>
      </div>
    </div>
  );
}

export default Hero;
