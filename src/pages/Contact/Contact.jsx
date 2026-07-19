import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm/ContactForm';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out for bookings, questions, or just to say hello.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.formSide}>
              <SectionHeader
                subtitle="Contact Us"
                title="Send Us a Message"
                description="Have a question or special request? Drop us a message and we'll get back to you within 24 hours."
                align="left"
              />
              <ContactForm />
            </div>

            <div className={styles.infoSide}>
              {/* Contact Cards */}
              <div className={styles.contactCards}>
                <a href="https://wa.me/27000000000" className={styles.contactCard}>
                  <div className={`${styles.contactIcon} ${styles.whatsapp}`}>
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+27 00 000 0000</p>
                    <span className={styles.contactCta}>Chat Now →</span>
                  </div>
                </a>

                <a href="tel:+27000000000" className={styles.contactCard}>
                  <div className={`${styles.contactIcon} ${styles.phone}`}>
                    <FaPhone />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+27 00 000 0000</p>
                    <span className={styles.contactCta}>Call Now →</span>
                  </div>
                </a>

                <a href="mailto:hello@hermajesty.co.za" className={styles.contactCard}>
                  <div className={`${styles.contactIcon} ${styles.email}`}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@hermajesty.co.za</p>
                    <span className={styles.contactCta}>Send Email →</span>
                  </div>
                </a>

                <div className={styles.contactCard}>
                  <div className={`${styles.contactIcon} ${styles.location}`}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>123 Main Street, Soweto<br />Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className={styles.hoursCard}>
                <h3>
                  <FaClock />
                  Business Hours
                </h3>
                <ul>
                  <li><span>Monday - Friday</span><span>8:00 AM - 7:00 PM</span></li>
                  <li><span>Saturday</span><span>8:00 AM - 5:00 PM</span></li>
                  <li><span>Sunday</span><span>10:00 AM - 4:00 PM</span></li>
                </ul>
              </div>

              {/* Social */}
              <div className={styles.socialCard}>
                <h3>Follow Us</h3>
                <div className={styles.socials}>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="Facebook"><FaFacebook /></a>
                  <a href="#" aria-label="TikTok"><FaTiktok /></a>
                  <a href="https://wa.me/27000000000" aria-label="WhatsApp"><FaWhatsapp /></a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapPlaceholder}>
                <FaMapMarkerAlt />
                <p>Google Maps integration coming soon</p>
                <span>123 Main Street, Soweto, Johannesburg</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;