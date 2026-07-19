import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaStar, FaHeart, FaShieldAlt, FaGem, FaClock } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import { featuredServices } from '../../data/services';
import { testimonials } from '../../data/testimonials';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './Home.module.css';

const trustCards = [
  { icon: FaGem, title: 'Professional Service', desc: 'Certified stylists with years of experience in African hair care.' },
  { icon: FaHeart, title: 'Quality Hairstyles', desc: 'Premium products and techniques that protect and enhance your natural hair.' },
  { icon: FaShieldAlt, title: 'Customer Care', desc: 'Personalized consultations to find your perfect style.' },
  { icon: FaClock, title: 'Long Lasting Results', desc: 'Styles designed to last 6-8 weeks with proper care.' },
];

const Home = () => {
  useRevealOnScroll();

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src="/images/hero-braids.jpg" alt="Beautiful braided hairstyles" />
          <div className={styles.heroOverlay} />
        </div>
        
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <FaStar /> Johannesburg's Finest Braiding Salon
            </div>
            <h1 className={styles.heroTitle}>
              Beautiful Protective Hairstyles{' '}
              <span className="gradient-text">Designed For Your Confidence</span>
            </h1>
            <p className={styles.heroText}>
              Professional African braiding services in Johannesburg. From knotless braids to custom cornrows — we craft styles that make you feel like royalty.
            </p>
            <div className={styles.heroButtons}>
              <Button to="/booking" variant="primary" size="lg" icon={FaArrowRight}>
                Book Appointment
              </Button>
              <Button to="/gallery" variant="ghost" size="lg">
                View Hairstyles
              </Button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>5★</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.trust} section-padding`}>
        <div className="container">
          <SectionHeader
            subtitle="Why Choose Us"
            title="The Her Majesty Difference"
            description="We don't just braid hair — we create confidence, celebrate culture, and build lasting relationships with every client."
          />
          <div className={styles.trustGrid}>
            {trustCards.map((card, index) => (
              <div key={index} className={`${styles.trustCard} reveal`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className={styles.trustIcon}>
                  <card.icon />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className={`${styles.featured} section-padding`}>
        <div className="container">
          <SectionHeader
            subtitle="Our Services"
            title="Signature Styles"
            description="From protective styles to special occasion looks, discover our most requested services."
          />
          <div className={styles.servicesGrid}>
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} featured />
            ))}
          </div>
          <div className={styles.servicesCta}>
            <Button to="/services" variant="secondary" size="lg" icon={FaArrowRight}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className={`${styles.galleryPreview} section-padding`}>
        <div className="container">
          <SectionHeader
            subtitle="Portfolio"
            title="Our Latest Work"
            description="Scroll-stopping styles created for our amazing clients."
            light
          />
          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`${styles.galleryItem} reveal`} style={{ transitionDelay: `${i * 0.05}s` }}>
                <img src={`/images/gallery/preview-${i}.jpg`} alt={`Hairstyle ${i}`} loading="lazy" />
                <div className={styles.galleryOverlay} />
              </div>
            ))}
          </div>
          <div className={styles.galleryCta}>
            <Button to="/gallery" variant="ghost" size="lg" icon={FaArrowRight}>
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} section-padding`}>
        <div className="container">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Real reviews from real clients who keep coming back."
          />
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className={styles.locationCta}>
        <div className={styles.locationBg}>
          <div className={styles.locationOverlay} />
        </div>
        <div className="container">
          <div className={styles.locationContent}>
            <h2>Serving Johannesburg & Soweto</h2>
            <p>Conveniently located with easy access from major transport routes. Your royal experience awaits.</p>
            <Button href="https://wa.me/27000000000" variant="whatsapp" size="lg" icon={FaWhatsapp}>
              Book Through WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
