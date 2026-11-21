import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import {
  FiCloud,
  FiMenu,
  FiX,
  FiLock,
  FiShare2,
  FiBell,
  FiCalendar,
  FiActivity,
  FiGrid,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiGithub
} from 'react-icons/fi';

function Landing() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const features = [
    {
      icon: <FiLock />,
      title: "Secure Records",
      text: "End-to-end encrypted records ensuring patient data privacy at all times."
    },
    {
      icon: <FiShare2 />,
      title: "Instant Sharing",
      text: "Share medical records securely and instantly with verified healthcare providers."
    },
    {
      icon: <FiCloud />,
      title: "Cloud Storage",
      text: "Scalable, secure, and always-accessible cloud storage built for healthcare."
    },
    {
      icon: <FiBell />,
      title: "Medicine Reminder",
      text: "Automatic medication alerts and notifications to keep patients on track."
    },
    {
      icon: <FiCalendar />,
      title: "Hospital Management",
      text: "Manage appointments, doctors, and hospital schedules seamlessly."
    },
    {
      icon: <FiActivity />,
      title: "Notifications",
      text: "Receive real-time updates regarding test results and consultations."
    },
    {
      icon: <FiGrid />,
      title: "Patient Dashboard",
      text: "A complete, user-friendly health overview accessible anytime, anywhere."
    }
  ];

  return (
    <div className="landing-container">
      {/* Navbar */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          <a href="#home" className="nav-logo" onClick={closeMobileMenu}>
            <FiCloud className="nav-logo-icon" />
            <span>HealthSafe Cloud</span>
          </a>

          <button className="hamburger-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" onClick={closeMobileMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#features" onClick={closeMobileMenu}>Features</a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={closeMobileMenu}>About Us</a>
            </li>
            <li className="nav-item">
              <a href="#works" onClick={closeMobileMenu}>How it Works</a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </li>
            <li className="nav-actions">
              <button className="btn-login" onClick={() => { closeMobileMenu(); navigate('/login'); }}>Login</button>
              <button className="btn-get-started" onClick={() => { closeMobileMenu(); navigate('/register'); }}>Sign Up</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-heading">
              HealthSafe <span>Cloud</span>
            </h1>
            <h2 className="hero-subtitle">
              Secure Cloud-Based Electronic Health Record Sharing Platform
            </h2>
            <p className="hero-paragraph">
              Empowering people and hospitals to securely store, share, and manage patient health records in the cloud with top-tier encryption.
            </p>
            <div className="hero-buttons">
              <button className="btn-hero-primary" onClick={() => { closeMobileMenu(); navigate('/register'); }}>Sign Up</button>
              <button className="btn-hero-secondary" onClick={() => { closeMobileMenu(); navigate('/login'); }}>Login</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="illustration-wrapper">
              <div className="blob-background"></div>
              {/* Premium Inline Custom SVG representing doctor, patient, cloud, shield & card */}
              <svg className="illustration-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Grid Accent Lines */}
                <path d="M50 100 H450 M50 200 H450 M50 300 H450 M50 400 H450" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
                <path d="M100 50 V450 M200 50 V450 M300 50 V450 M400 50 V450" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />

                {/* Floating Elements (Background) */}
                <g className="svg-float-shape2">
                  <circle cx="90" cy="120" r="16" fill="#60A5FA" opacity="0.3" />
                  <rect x="380" y="80" width="24" height="24" rx="6" fill="#34D399" opacity="0.2" transform="rotate(15 392 92)" />
                </g>

                {/* Medical Cloud Representation (Center Main Backdrop) */}
                <g className="svg-float-main">
                  {/* Outer Glow */}
                  <path d="M160 280 C130 280 110 255 110 225 C110 195 130 170 160 170 C170 130 205 100 250 100 C295 100 330 130 340 170 C370 170 390 195 390 225 C390 255 370 280 340 280 Z" fill="url(#cloudGlow)" opacity="0.4" filter="blur(8px)" />
                  {/* Cloud Body */}
                  <path d="M160 280 C130 280 110 255 110 225 C110 195 130 170 160 170 C170 130 205 100 250 100 C295 100 330 130 340 170 C370 170 390 195 390 225 C390 255 370 280 340 280 Z" fill="url(#cloudGrad)" />
                  {/* Cloud Internal Details */}
                  <path d="M220 180 Q250 160 280 180" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Secure Shield Overlay */}
                <g className="svg-float-shape1">
                  <path d="M250 200 L300 220 V270 C300 310 270 335 250 345 C230 335 200 310 200 270 V220 L250 200 Z" fill="url(#shieldGrad)" filter="drop-shadow(0 8px 16px rgba(37, 99, 235, 0.2))" />
                  <path d="M250 215 L285 230 V265 C285 295 265 315 250 325 C235 315 215 295 215 265 V230 L250 215 Z" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.9" />
                  {/* Checkmark inside shield */}
                  <path d="M238 270 L246 278 L264 260" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Doctor Figure (Left Foreground) */}
                <g className="svg-float-shape3">
                  {/* Doctor Card Wrapper */}
                  <rect x="50" y="240" width="130" height="150" rx="20" fill="#FFFFFF" filter="drop-shadow(0 12px 24px rgba(30, 41, 59, 0.08))" />
                  {/* Doctor Avatar */}
                  <circle cx="115" cy="290" r="24" fill="#E2E8F0" />
                  {/* Doctor Body (Placeholder shape) */}
                  <path d="M100 330 C100 320 105 314 115 314 C125 314 130 320 130 330 Z" fill="#2563EB" />
                  {/* Stethoscope */}
                  <path d="M110 295 A8 8 0 0 0 120 295" stroke="#1E293B" strokeWidth="2" fill="none" />
                  {/* Text lines simulating card info */}
                  <rect x="75" y="345" width="80" height="6" rx="3" fill="#94A3B8" />
                  <rect x="90" y="360" width="50" height="4" rx="2" fill="#CBD5E1" />
                  {/* Status Badge */}
                  <circle cx="150" cy="255" r="8" fill="#34D399" />
                  <path d="M148 255 L150 257 L153 254" stroke="#FFFFFF" strokeWidth="1.5" />
                </g>

                {/* Patient / Health Record Card (Right Foreground) */}
                <g className="svg-float-shape2">
                  {/* Card Container */}
                  <rect x="310" y="260" width="140" height="90" rx="12" fill="#FFFFFF" filter="drop-shadow(0 12px 24px rgba(30, 41, 59, 0.08))" transform="rotate(-5 380 305)" />
                  {/* Card Banner */}
                  <path d="M312 263 L448 251 V278 L312 290 Z" fill="url(#cardBannerGrad)" />
                  {/* Card Logo */}
                  <circle cx="335" cy="275" r="8" fill="#FFFFFF" opacity="0.9" />
                  <path d="M333 275 H337 M335 273 V277" stroke="#2563EB" strokeWidth="1.5" />
                  {/* ECG line */}
                  <path d="M325 320 L345 320 L350 310 L355 330 L360 315 L365 325 L370 320 L400 320" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {/* User Data lines */}
                  <rect x="410" y="295" width="25" height="4" rx="2" fill="#94A3B8" />
                  <rect x="410" y="305" width="25" height="4" rx="2" fill="#CBD5E1" />
                </g>

                {/* Sparkles / Accents (Foreground) */}
                <g className="svg-float-shape1">
                  <path d="M280 80 L283 87 L290 90 L283 93 L280 100 L277 93 L270 90 L277 87 Z" fill="#FBBF24" />
                  <path d="M80 380 L82 385 L87 387 L82 389 L80 394 L78 389 L73 387 L78 385 Z" fill="#FBBF24" opacity="0.7" />
                </g>

                {/* Definitions for Gradients */}
                <defs>
                  <linearGradient id="cloudGlow" x1="110" y1="100" x2="390" y2="280" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                  <linearGradient id="cloudGrad" x1="110" y1="100" x2="390" y2="280" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EFF6FF" />
                    <stop offset="100%" stopColor="#DBEAFE" />
                  </linearGradient>
                  <linearGradient id="shieldGrad" x1="200" y1="200" x2="300" y2="345" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                  <linearGradient id="cardBannerGrad" x1="312" y1="263" x2="448" y2="278" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header fade-in">
          <span className="section-tag">Platform Features</span>
          <h2 className="section-title">Designed for Trust and Speed</h2>
          <p className="section-desc">
            Explore the powerful core capabilities built directly into the HealthSafe Cloud infrastructure.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id='contact'>
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <FiCloud />
              <span>HealthSafe Cloud</span>
            </a>
            <p className="footer-desc">
              Building a secure and unified cloud environment for health records. Sharing data between hospitals and patients has never been easier or safer.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FiFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter"><FiTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Github"><FiGithub /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#works">How it Works</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Features</h4>
            <ul className="footer-links">
              <li><a href="#features">Encrypted Sharing</a></li>
              <li><a href="#features">Appointment Scheduling</a></li>
              <li><a href="#features">Instant Notifications</a></li>
              <li><a href="#features">Scale Storage</a></li>
              <li><a href="#features">Alert Systems</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li><span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Email: support@healthsafecloud.com</span></li>
              <li><span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Phone: +91 9876543210</span></li>
              <li><span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Address: East Mardeepally, secunderbad, Hyderabad, Telangana, India</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HealthSafe Cloud. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
