import React from 'react';
import './HomePage.css';


const HomePage = () => {
    return (
        <div className="home">

            <div className="adminlogin">
                <button className="cta-button">Admin Login</button>
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Hathraliyadda Primary School</h1>
                    <p>Nurturing Tomorrow's Leaders Today</p>
                    <button className="cta-button">About Us</button>
                </div>
            </section>

            {/* Quick Info Section */}
            <section className="quick-info">
                <div className="info-card">
                    <i className="fas fa-users"></i>
                    <h3>600+</h3>
                    <p>Students</p>
                </div>
                <div className="info-card">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <h3>30+</h3>
                    <p>Teachers</p>
                </div>
                <div className="info-card">
                    <i className="fas fa-award"></i>
                    <h3>25+</h3>
                    <p>Years of Excellence</p>
                </div>
            </section>

            {/* Announcements Section */}
            <section className="announcements">
                <h2>Latest News & Events</h2>
                <div className="announcement-grid">
                    <div className="announcement-card">
                        <h4>Annual Sports Meet</h4>
                        <p>Join us for our annual sports meet on July 15th</p>
                        <a href="#">Read More →</a>
                    </div>
                    <div className="announcement-card">
                        <h4>Parent-Teacher Meeting</h4>
                        <p>Scheduled for next Friday at 2 PM</p>
                        <a href="#">Read More →</a>
                    </div>
                    <div className="announcement-card">
                        <h4>Art Exhibition</h4>
                        <p>Student artwork showcase next month</p>
                        <a href="#">Read More →</a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <i className="fas fa-graduation-cap"></i>
                        <h3>Quality Education</h3>
                        <p>Comprehensive curriculum focused on holistic development</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-running"></i>
                        <h3>Sports Facilities</h3>
                        <p>Modern playground and sports equipment</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-book-reader"></i>
                        <h3>Library</h3>
                        <p>Well-stocked library with digital resources</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-microscope"></i>
                        <h3>Science Lab</h3>
                        <p>Fully equipped science laboratory</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;