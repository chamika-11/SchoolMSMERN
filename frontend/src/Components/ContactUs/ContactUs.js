import './ContactUs.css';

const ContactUs = () => {

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with us for any inquiries</p>
            </div>

            <div class="contact-container">
    
            <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Our Address</h3>
            <p>123 School Street</p>
            <p>City, State 12345</p>
            <p>Country</p>
          </div>

          <div className="info-card">
            <i className="fas fa-phone"></i>
            <h3>Phone Numbers</h3>
            <p>Main Office: (123) 456-7890</p>
            <p>Admissions: (123) 456-7891</p>
            <p>Student Services: (123) 456-7892</p>
          </div>

          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h3>Email Addresses</h3>
            <p>General Inquiries: info@school.edu</p>
            <p>Admissions: admissions@school.edu</p>
            <p>Support: support@school.edu</p>
          </div>
        </div>

        <div className="map-container">
          <h2>Find Us On Map</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_CODE"
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
    </div>
    );
};

export default ContactUs;