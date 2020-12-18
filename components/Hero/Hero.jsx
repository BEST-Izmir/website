import React from 'react';
import styles from './Hero.module.scss';
function Hero(props) {
  return (
    <div className={styles.hero}>
      <div className={styles['hero-content']}>
        <h1>Best Izmir</h1>
      </div>
    </div>
  );
}

export default Hero;
