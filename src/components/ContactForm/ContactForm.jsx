import React, { useState } from 'react';
import { FaWhatsapp, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';

const ContactForm = ({ bookingMode = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (bookingMode && !formData.service) newErrors.service = 'Please select a service';
    if (bookingMode && !formData.date) newErrors.date = 'Please select a date';
    if (bookingMode && !formData.time) newErrors.time = 'Please select a time';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate submission
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      // In production: send to backend
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <FaCheckCircle className={styles.successIcon} />
        <h3>Request Received!</h3>
        <p>We'll contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={errors.name ? styles.error : ''}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 071 234 5678"
            className={errors.phone ? styles.error : ''}
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={errors.email ? styles.error : ''}
        />
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      </div>

      {bookingMode && (
        <>
          <div className={styles.field}>
            <label htmlFor="service">Service Required *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={errors.service ? styles.error : ''}
            >
              <option value="">Select a service</option>
              <option value="knotless">Knotless Braids</option>
              <option value="box">Box Braids</option>
              <option value="cornrows">Cornrows</option>
              <option value="wig">Wig Installation</option>
              <option value="other">Other</option>
            </select>
            {errors.service && <span className={styles.errorText}>{errors.service}</span>}
          </div>

          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="date">Preferred Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={errors.date ? styles.error : ''}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && <span className={styles.errorText}>{errors.date}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="time">Preferred Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={errors.time ? styles.error : ''}
              >
                <option value="">Select time</option>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                <option value="evening">Evening (4pm - 7pm)</option>
              </select>
              {errors.time && <span className={styles.errorText}>{errors.time}</span>}
            </div>
          </div>
        </>
      )}

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your hair goals..."
          rows={4}
        />
      </div>

      <div className={styles.actions}>
        <Button type="submit" variant="primary" size="lg" icon={FaPaperPlane}>
          {bookingMode ? 'Request Booking' : 'Send Message'}
        </Button>
        
        <span className={styles.or}>or</span>
        
        <Button 
          href="https://wa.me/27000000000" 
          variant="whatsapp" 
          size="lg" 
          icon={FaWhatsapp}
        >
          WhatsApp Us
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;