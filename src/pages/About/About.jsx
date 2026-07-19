import React from 'react';
import { FaGem, FaHeart, FaUsers, FaStar } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import styles from './About.module.css';

const values = [
  { icon: FaGem, title: 'Quality', desc: 'We use only premium hair products and maintain the highest standards in every braid.' },
  { icon: FaHeart, title: 'Beauty', desc: 'Every style is a masterpiece designed to enhance your natural beauty.' },
  { icon: FaUsers, title: 'Culture', desc: 'We honor African braiding traditions while embracing modern creativity.' },
  { icon: FaStar, title: 'Experience', desc: 'Your comfort and satisfaction are at the heart of everything we do.' },
];

const About = () => {
  useRevealOnScroll();

  return (
    <div className={styles.about}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>About Her Majesty</h1>
          <p>Where tradition meets innovation, and every client is treated like royalty.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className={`${styles.whoWeAre} section-padding`}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.imageSide}>
              <div className={styles.imageFrame}>
                <img src="/images/founder.jpg" alt="Founder of Her Majesty Braiding" />
                <div className={styles.imageAccent} />
              </div>
            </div>
            <div className={styles.contentSide}>
              <span className={styles.label}>Who We Are</span>
              <h2>Crafting Confidence, One Braid at a Time</h2>
              <p>
                Her Majesty Braiding & Beauty was born from a passion for African hair artistry and a vision to create a space where every woman feels like royalty. Founded in the heart of Soweto, we've grown from a small home studio to one of Johannesburg's most trusted braiding destinations.
              </p>
              <p>
                Our team of skilled stylists combines generations of traditional braiding knowledge with contemporary techniques, ensuring every client leaves with a style that's both beautiful and protective.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Clients Served</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Style Variations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={`${styles.story} section-padding`}>
        <div className="container">
          <div className={`${styles.split} ${styles.splitReversed}`}>
            <div className={styles.contentSide}>
              <span className={styles.label}>Our Story</span>
              <h2>From Passion to Purpose</h2>
              <p>
                What started as braiding friends' hair in a small Soweto backyard has blossomed into a full-service beauty destination. Our founder's dedication to perfecting every technique and treating every client with care quickly built a reputation that spread through word-of-mouth across Johannesburg.
              </p>
              <p>
                Today, Her Majesty stands as a testament to the power of skill, passion, and community. We continue to grow, learn, and innovate — always staying true to our roots while embracing the future of hair artistry.
              </p>
              <blockquote className={styles.quote}>
                "Every woman who sits in my chair leaves feeling like the queen she truly is."
              </blockquote>
            </div>
            <div className={styles.imageSide}>
              <div className={`${styles.imageFrame} ${styles.imageFrameAlt}`}>
                <img src="/images/salon.jpg" alt="Her Majesty Salon Interior" />
                <div className={styles.imageAccentAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${styles.values} section-padding`}>
        <div className="container">
          <SectionHeader
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide every braid, every conversation, and every experience at Her Majesty."
          />
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={`${styles.valueCard} reveal`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className={styles.valueIcon}>
                  <value.icon />
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;