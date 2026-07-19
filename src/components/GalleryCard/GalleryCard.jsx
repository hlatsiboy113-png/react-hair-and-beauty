import React, { useState } from 'react';
import { FaExpand } from 'react-icons/fa';
import styles from './GalleryCard.module.css';

const GalleryCard = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`${styles.card} reveal`}>
      <div className={styles.imageWrapper}>
        <img 
          src={item.src} 
          alt={item.title}
          className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <span className={styles.category}>{item.category}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <button className={styles.expandBtn} aria-label="View larger">
              <FaExpand />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;