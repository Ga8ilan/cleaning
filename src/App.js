import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  // Smooth scroll handler for Get Started button
  const handleGetStartedClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const yOffset = -80; // Offset in pixels
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Contact form state for confirmation
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      await fetch('https://formspree.io/f/xyzwepda', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });
      setFormSubmitted(true);
      form.reset();
    } catch (error) {
      // Optionally handle error here
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Thelma's Logo" className="logo-img" />
            <span className="logo-text">Thelma's Cleaning Services</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Long Island's Best Cleaning service!</h1>
          <h2>Thelma's Cleaning </h2>
          <p>Serving the North Fork of Long Island</p>
          <button className="cta-button" onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>My Services</h2>
        <h3 className="services-subheading">What I Do:</h3>
        <div className="services-grid large-services-grid">
          <div className="service-card large-service-card">
            <h3>Residential Cleaning</h3>
            <p>Thorough cleaning for homes, apartments, and condos, ensuring every space is spotless and welcoming.</p>
          </div>
          <div className="service-card large-service-card">
            <h3>Business Cleaning</h3>
            <p>Professional cleaning for offices and businesses to maintain a clean and productive environment.</p>
          </div>
          <div className="service-card large-service-card">
            <h3>Move-In/Move-Out Cleaning</h3>
            <p>Deep cleaning services to prepare properties for new tenants or to leave your old space sparkling clean.</p>
          </div>
          <div className="service-card large-service-card">
            <h3>Other Cleaning</h3>
            <p>Customer requests are welcome!</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="owner-portrait-container">
            <img src="/mom.png" alt="Thelma Molina" className="owner-portrait" />
            <div className="owner-name">Thelma Molina</div>
          </div>
          <p>This small, locally owned cleaning business has proudly served Long Island's 
            North Fork for over ten years, working in communities like Mattituck, Laurel,
            Cutchogue, Greenport, and beyond. Known for reliability, attention to detail, 
            and a genuine commitment to customer satisfaction, the owner has built a strong 
            reputation with hundreds of happy clients. As a trusted part of the community, 
            this business stands out by offering honest, personalized service that bigger 
            companies just can't match.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me!</h2>
        <div className="contact-subtitle">I'd love to hear from you!</div>
        <div className="contact-intro">Whether you have a question or want a quote, fill out the form below and I will get back to you as soon as possible.</div>
        {formSubmitted ? (
          <div className="contact-confirmation">Thank you for reaching out! Your message has been sent. You will receive a response back to you soon.</div>
        ) : (
          <div className="contact-form-container contact-form">
            <form onSubmit={handleContactSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Thelma's Cleaning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
