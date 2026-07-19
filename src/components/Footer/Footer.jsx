import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCrown } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <FaCrown />
              <span>Her Majesty</span>
            </Link>
            <p className={styles.tagline}>
              Where African tradition meets modern elegance. Professional braiding services in Johannesburg.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
              <a href="https://wa.me/27000000000" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/booking">Book Now</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.links}>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Knotless Braids</Link></li>
              <li><Link to="/services">Box Braids</Link></li>
              <li><Link to="/services">Cornrows</Link></li>
              <li><Link to="/services">Wig Installation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>123 Main Street, Soweto, Johannesburg</span>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+27000000000">+27 00 000 0000</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:hello@hermajesty.co.za">hello@hermajesty.co.za</a>
              </li>
              <li>
                <FaWhatsapp />
                <a href="https://wa.me/27000000000">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Her Majesty Braiding & Beauty. All rights reserved.</p>
          <div className={styles.legal}>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;