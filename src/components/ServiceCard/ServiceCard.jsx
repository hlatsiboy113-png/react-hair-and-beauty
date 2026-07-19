import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaTag, FaArrowRight } from 'react-icons/fa';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service, featured = false }) => {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''} reveal`}>
      <div className={styles.imageWrapper}>
        <img 
          src={service.image} 
          alt={service.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay} />
        <span className={styles.price}>{service.price}</span>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
        
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <FaClock />
            {service.duration}
          </span>
        </div>
        
        <Link to={`/services#${service.id}`} className={styles.link}>
          Learn More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;