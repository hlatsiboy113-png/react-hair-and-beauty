import React from 'react';
import { FaClock, FaTag, FaCheck, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { services } from '../../data/services';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './Services.module.css';

const Services = () => {
  useRevealOnScroll();

  return (
    <div className={styles.services}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Discover our full range of professional braiding and beauty services.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`${styles.serviceBlock} reveal`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className={styles.serviceOverlay} />
                </div>
                
                <div className={styles.serviceContent}>
                  <div className={styles.serviceHeader}>
                    <h2>{service.title}</h2>
                    <div className={styles.serviceMeta}>
                      <span className={styles.price}>
                        <FaTag /> {service.price}
                      </span>
                      <span className={styles.duration}>
                        <FaClock /> {service.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className={styles.description}>{service.fullDescription}</p>
                  
                  <div className={styles.features}>
                    <h4>What's Included:</h4>
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i}>
                          <FaCheck /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.serviceActions}>
                    <Button to="/booking" variant="primary" size="md" icon={FaArrowRight}>
                      Book This Service
                    </Button>
                    <Link to="/gallery" className={styles.viewGallery}>
                      View in Gallery
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Not Sure Which Style is Right for You?</h2>
            <p>Book a free consultation and let our experts recommend the perfect style for your hair type and lifestyle.</p>
            <Button to="/contact" variant="secondary" size="lg">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
