import './ContactUs.css';

const ContactUs = () => {

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with us for any inquiries</p>
            </div>

            <div className="contact-container">
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
            </div>

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