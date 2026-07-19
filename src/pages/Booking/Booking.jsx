import React from 'react';
import { FaCalendarAlt, FaInfoCircle, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm/ContactForm';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import styles from './Booking.module.css';

const Booking = () => {
  return (
    <div className={styles.booking}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Book Your Appointment</h1>
          <p>Secure your spot and get ready to be transformed.</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.formSide}>
              <SectionHeader
                subtitle="Book Now"
                title="Request Your Appointment"
                description="Fill in the form below and we'll confirm your booking within 24 hours."
                align="left"
              />
              <ContactForm bookingMode />
            </div>

            <div className={styles.infoSide}>
              <div className={styles.infoCard}>
                <h3>
                  <FaInfoCircle />
                  Booking Information
                </h3>
                <ul>
                  <li>
                    <strong>Deposit:</strong> A 50% deposit is required to secure your appointment.
                  </li>
                  <li>
                    <strong>Cancellation:</strong> Please give 24 hours notice for cancellations.
                  </li>
                  <li>
                    <strong>Late Arrivals:</strong> Arriving more than 15 minutes late may result in rescheduling.
                  </li>
                  <li>
                    <strong>Hair Prep:</strong> Please come with clean, detangled hair for best results.
                  </li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>
                  <FaCalendarAlt />
                  Business Hours
                </h3>
                <ul className={styles.hours}>
                  <li><span>Monday - Friday</span><span>8:00 AM - 7:00 PM</span></li>
                  <li><span>Saturday</span><span>8:00 AM - 5:00 PM</span></li>
                  <li><span>Sunday</span><span>10:00 AM - 4:00 PM</span></li>
                </ul>
              </div>

              <div className={styles.whatsappCard}>
                <h3>Prefer WhatsApp?</h3>
                <p>Send us a message directly for quick bookings and inquiries.</p>
                <Button 
                  href="https://wa.me/27000000000" 
                  variant="whatsapp" 
                  size="md" 
                  icon={FaWhatsapp}
                >
                  Message on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;