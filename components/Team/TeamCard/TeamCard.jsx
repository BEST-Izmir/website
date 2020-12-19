import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeamCard.module.scss';
import Link from 'next/link';

function TeamCard({ imgUrl, name, duty, mail }) {
  return (
    <div className={styles['team-card']}>
      <img src={imgUrl} alt={name} className={styles['team-img']} />
      <div className={styles['team-name']}>{name}</div>
      <div className={styles['team-duty']}>{duty}</div>
      <a className={styles['team-mail']} href={`mailto:${mail}`}>{mail}</a>
    </div>
  );
}

TeamCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  duty: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};

export default TeamCard;
