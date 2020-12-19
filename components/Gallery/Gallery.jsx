import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import styles from './Gallery.module.scss';

const Gallery = props => {
  const images = [
    {
      original: '/static/etkinlik/5.jpg',
    },
    {
      original: '/static/etkinlik/4.jpg',
    },
    {
      original: '/static/etkinlik/3.jpg',
    },
    {
      original: '/static/etkinlik/2.jpg',
    },
    {
      original: '/static/etkinlik/1.jpg',
    },
  ];
  return (
    <div className={styles.gallery} id="gallery">
      <div className="container">
        <h3 className={styles['section-title']}>Galeri</h3>
        <ImageGallery items={images} lazyLoad={true} showThumbnails={false} />;
      </div>
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
