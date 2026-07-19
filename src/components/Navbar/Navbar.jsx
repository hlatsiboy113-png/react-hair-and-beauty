import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCrown } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/booking', label: 'Book Now' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            <Link to="/" className={styles.logo}>
              <FaCrown className={styles.logoIcon} />
              <span>Her Majesty</span>
            </Link>

            <div className={styles.desktopNav}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${styles.link} ${location.pathname === link.to ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/booking" className={styles.cta}>
                Book Now
              </Link>
            </div>

            <button 
              className={styles.menuBtn} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className={styles.mobileLink}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/booking" className={styles.mobileCta}>
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;