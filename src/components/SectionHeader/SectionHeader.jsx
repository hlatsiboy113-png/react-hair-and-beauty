import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ subtitle, title, description, align = 'center', light = false }) => {
  return (
    <div className={`${styles.header} ${styles[align]} ${light ? styles.light : ''}`}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SectionHeader;