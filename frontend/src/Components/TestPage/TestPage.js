import React, { useState, useEffect } from "react";
import "./TestPage.css";

const TestPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { url: "/IMG_1653.jpg", text: "Nurturing Minds, Building Futures" },
    { url: "/IMG_20230423_183152.jpg", text: "Excellence in Academics" },
    { url: "/IMG_20240201_140228.jpg", text: "Sports and Athletics" },
    { url: "/BackGround.jpg", text: "Creative Arts and Culture" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container">
      <div className="background-slideshow">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img.url})` }}
          ></div>
        ))}
      </div>

      <header className="navbar">
        <div className="logo">
          <img src="/favicon.png" alt="Hatharaliyadda Primary School" />
        </div>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#history">Our History</a></li>
            <li><a href="#students">Students</a></li>
            <li><a href="#news">News & Events</a></li>
          </ul>
        </nav>
        <div className="contact">
          <a href="tel:+94123456789">070 XXX XXXX</a>
          <a href="#fees" className="fees-btn">Pay Fees Online</a>
        </div>
      </header>

      <div className="overlay-text">
        <h1>{images[currentSlide].text}</h1>
      </div>
    </div>
  );
};

export default TestPage;
