import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaShieldAlt, FaHospital, FaUser, FaPlus, FaTimes, FaArrowLeft } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState(null);
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleCardClick = (role) => {
    setActiveRole(role);
    setLoginId('');
    setPassword('');
  };

  const handleCloseModal = () => {
    setActiveRole(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Simulating login for ${activeRole} with ID/Aadhar: ${loginId}`);
    if (activeRole === 'admin') {
      navigate('/admin');
    } else if (activeRole === 'hospital') {
      navigate('/hospital');
    } else if (activeRole === 'patient') {
      navigate('/patient');
    }
    setActiveRole(null);
  };

  const getRoleDetails = () => {
    switch (activeRole) {
      case 'admin':
        return {
          title: 'Admin Login',
          icon: <FaShieldAlt />,
          idLabel: 'Admin ID',
          idPlaceholder: 'Enter Admin ID'
        };
      case 'hospital':
        return {
          title: 'Hospital Login',
          icon: <FaHospital />,
          idLabel: 'Hospital ID',
          idPlaceholder: 'Enter Hospital ID or Email'
        };
      case 'patient':
        return {
          title: 'Patient Login',
          icon: <FaUser />,
          idLabel: 'Aadhar Number',
          idPlaceholder: 'Enter 12-digit Aadhar Number'
        };
      default:
        return null;
    }
  };

  const modalDetails = getRoleDetails();

  return (
    <div className="login-selection-container">
      {/* Background Decorative Elements */}
      <div className="background-decorations">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        
        {/* Medical Cross Watermark Backdrop */}
        <div className="medical-watermark">
          <svg viewBox="0 0 100 100" className="watermark-svg">
            <path d="M 35 15 H 65 V 35 H 85 V 65 H 65 V 85 H 35 V 65 H 15 V 35 H 35 Z" fill="rgba(37, 99, 235, 0.03)" />
          </svg>
        </div>
      </div>

      {/* Main Glassmorphism Card */}
      <div className="login-selection-card">
        {/* Back Arrow */}
        <button className="card-back-btn" onClick={() => navigate('/')} aria-label="Back to home">
          <FaArrowLeft />
        </button>

        {/* Top Logo */}
        <div className="login-logo" onClick={() => navigate('/')}>
          <div className="logo-icon-bg">
            <FaPlus className="logo-plus-icon" />
          </div>
          <span className="logo-text">HealthSafe <span className="blue-text">Cloud</span></span>
        </div>

        {/* Heading */}
        <div className="login-header">
          <h1 className="login-heading">Login As</h1>
          <p className="login-subtitle">Choose your role to continue</p>
        </div>

        {/* Role Cards List */}
        <div className="role-cards-container">
          {/* Card 1: Admin */}
          <div className="role-card" onClick={() => handleCardClick('admin')}>
            <div className="role-icon-wrapper">
              <FaShieldAlt className="role-icon" />
            </div>
            <div className="role-text-details">
              <h2 className="role-title">Admin</h2>
              <p className="role-desc">System administrator access</p>
            </div>
          </div>

          {/* Card 2: Hospital */}
          <div className="role-card" onClick={() => handleCardClick('hospital')}>
            <div className="role-icon-wrapper">
              <FaHospital className="role-icon" />
            </div>
            <div className="role-text-details">
              <h2 className="role-title">Hospital</h2>
              <p className="role-desc">Hospital & staff access</p>
            </div>
          </div>

          {/* Card 3: Patient */}
          <div className="role-card" onClick={() => handleCardClick('patient')}>
            <div className="role-icon-wrapper">
              <FaUser className="role-icon" />
            </div>
            <div className="role-text-details">
              <h2 className="role-title">Patient</h2>
              <p className="role-desc">Patient portal access</p>
            </div>
          </div>
        </div>

        {/* Sign Up Option */}
        <div className="login-footer">
          <p>Don't have an account? <span className="signup-link" onClick={() => navigate('/register')}>Sign Up</span></p>
        </div>
      </div>

      {/* Modal Popup Overlay */}
      {activeRole && modalDetails && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
              <FaTimes />
            </button>
            <div className="modal-header">
              <div className="modal-icon-wrapper">
                {modalDetails.icon}
              </div>
              <h2 className="modal-title">{modalDetails.title}</h2>
              <p className="modal-subtitle">Secure access verification</p>
            </div>
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-input-group">
                <label className="modal-input-label">{modalDetails.idLabel}</label>
                <input 
                  type="text" 
                  className="modal-input"
                  placeholder={modalDetails.idPlaceholder}
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </div>
              <div className="modal-input-group">
                <label className="modal-input-label">Password</label>
                <input 
                  type="password" 
                  className="modal-input"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="modal-buttons">
                <button type="button" className="btn-modal-cancel" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="btn-modal-submit" >Login</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Heartbeat Line SVG at bottom */}
      <div className="heartbeat-container">
        <svg className="heartbeat-svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path 
            className="heartbeat-path"
            d="M 0 50 L 400 50 L 415 50 Q 420 50 425 40 L 435 65 L 445 15 L 455 85 L 465 45 L 475 55 L 480 50 L 800 50 L 815 50 Q 820 50 825 40 L 835 65 L 845 15 L 855 85 L 865 45 L 875 55 L 880 50 L 1200 50" 
            fill="none" 
            stroke="url(#heartbeatGradient)" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <defs>
            <linearGradient id="heartbeatGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(96, 165, 250, 0.1)" />
              <stop offset="50%" stopColor="rgba(37, 99, 235, 0.4)" />
              <stop offset="100%" stopColor="rgba(96, 165, 250, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Login;