import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={`${styles.card} reveal`}>
      <div className={styles.quoteIcon}>
        <FaQuoteLeft />
      </div>
      
      <div className={styles.rating}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className={styles.star} />
        ))}
      </div>
      
      <p className={styles.text}>{testimonial.text}</p>
      
      <div className={styles.footer}>
        <div className={styles.avatar}>
          {testimonial.name.charAt(0)}
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>{testimonial.name}</h4>
          <span className={styles.role}>{testimonial.role}</span>
        </div>
        <span className={styles.service}>{testimonial.service}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;