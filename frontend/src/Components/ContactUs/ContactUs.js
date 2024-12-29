
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        setSubmitStatus({
            submitted: true,
            success: true,
            message: 'Thank you for your message. We will contact you soon!'
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-page">
            {/* Contact Header Section */}
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with us for any inquiries</p>
            </div>

            <div className="contact-container">
                {/* Contact Information Section */}
                <div className="contact-info">
                    <div className="info-card">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Our Location</h3>
                        <p>Hatharaliyadda Primary School</p>
                        <p>School Road, Hatharaliyadda</p>
                        <p>Sri Lanka</p>
                    </div>

                    <div className="info-card">
                        <i className="fas fa-phone-alt"></i>
                        <h3>Phone Numbers</h3>
                        <p>Office: +94 123 456 789</p>
                        <p>Principal: +94 123 456 790</p>
                        <p>Emergency: +94 123 456 791</p>
                    </div>

                    <div className="info-card">
                        <i className="fas fa-envelope"></i>
                        <h3>Email Address</h3>
                        <p>info@hatharaliyadda.edu.lk</p>
                        <p>principal@hatharaliyadda.edu.lk</p>
                        <p>admin@hatharaliyadda.edu.lk</p>
                    </div>

                    <div className="info-card">
                        <i className="fas fa-clock"></i>
                        <h3>Office Hours</h3>
                        <p>Monday - Friday: 7:30 AM - 3:30 PM</p>
                        <p>Saturday: 8:00 AM - 12:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="contact-form-container">
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter message subject"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Write your message here"
                                rows="6"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>

                        {submitStatus.submitted && (
                            <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
                                {submitStatus.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-container">
                <h2>Find Us on Map</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;