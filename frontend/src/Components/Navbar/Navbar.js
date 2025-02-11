import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-logo">
                    <div className="school-name">
                        <h1>Hatharaliyadda</h1>
                        <h2>Primary School</h2>
                    </div>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>


                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/HomePage" className="nav-link">Home</Link>

                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={toggleDropdown}>
                            About <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                            <Link to="/about/history">History</Link>
                            <Link to="/about/vision">Vision & Mission</Link>
                            <Link to="/about/staff">Staff</Link>
                        </div>
                    </div>
                    <Link to="/academics" className="nav-link">Academics</Link>
                    <Link to="/activities" className="nav-link">Activities</Link>
                    <Link to="/Gallery" className="nav-link">Gallery</Link>
                    <Link to="/Contact" className="nav-link">Contact</Link>
                    <Link to="/loginPage" className="admin-login-btn">
                    <i className="fas fa-user"></i> Admin Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;