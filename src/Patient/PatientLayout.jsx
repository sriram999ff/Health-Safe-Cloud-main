import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Patient.css';

const navItems = [
  { name: 'Dashboard', icon: 'bi-house-heart-fill', to: '/patient' },
  { name: 'Health Profile', icon: 'bi-shield-lock', to: '/patient/profile' },
  { name: 'Medical Records', icon: 'bi-capsule', to: '/patient/records' },
  { name: 'Access Requests', icon: 'bi-calendar-check', to: '/patient/access' },
  { name: 'Medicine Reminder', icon: 'bi-droplet-half', to: '/patient/medicine' },
  { name: 'Appointments', icon: 'bi-calendar2-week', to: '/patient/appointments' },
  { name: 'Hospitals', icon: 'bi-hospital', to: '/patient/hospitals' },
  { name: 'Notifications', icon: 'bi-bell', to: '/patient/notifications' },
  { name: 'Settings', icon: 'bi-gear', to: '/patient/settings' },
  { name: 'Logout', icon: 'bi-box-arrow-right' }
];

function PatientLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavClick = (itemName) => {
    if (itemName === 'Logout') {
      navigate('/login');
    }
  };

  return (
    <div className="patient-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="brand-box">
            <div className="brand-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <div>
              <h3>HealthSafe Cloud</h3>
              <p>Patient Portal</p>
            </div>
          </div>
          <button className="sidebar-close" type="button" onClick={() => setSidebarOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            if (item.name === 'Logout') {
              return (
                <button
                  type="button"
                  className="nav-link-btn"
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.name}</span>
                </button>
              );
            }

            return (
              <NavLink
                to={item.to}
                end={item.to === '/patient'}
                className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}
                key={item.name}
                onClick={() => setSidebarOpen(false)}
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="footer-card">
            <p>Your Health ID</p>
            <strong>HSC-9823-4412</strong>
          </div>
        </div>
      </aside>

      <main className="content-area">
        <header className="topbar">
          <div className="topbar-left">
            <button className="sidebar-toggle" type="button" onClick={() => setSidebarOpen(true)}>
              <i className="bi bi-list"></i>
            </button>
            <div className="welcome-banner">
              <h2>Hello, Swaraj Chidurala</h2>
            </div>
          </div>

          <div className="topbar-right">
            <button className="icon-button" type="button" aria-label="Notifications">
              <i className="bi bi-bell"></i>
              <span className="badge">1</span>
            </button>
            <div className="profile-card">
              <div className="avatar">SC</div>
              <div>
                <strong>Swaraj Chidurala</strong>
                <p>Patient</p>
              </div>
            </div>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}

export default PatientLayout;
