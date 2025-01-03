import React from 'react';
import './HomePage.css';


const HomePage = () => {
    return (
        
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Hathraliyadda Primary School</h1>
                    <p>Nurturing Tomorrow's Leaders Today</p>
                </div>
            </section>

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
        </div>
    );
};

export default HomePage;