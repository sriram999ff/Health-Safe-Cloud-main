import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: 'bi-speedometer2' },
  { name: 'Hospitals', path: '/admin/hospitals', icon: 'bi-hospital' },
  { name: 'Hospital Requests', path: '/admin/requests', icon: 'bi-file-earmark-medical' },
  { name: 'Analytics', path: '/admin/analytics', icon: 'bi-bar-chart-line' },
  { name: 'Patients', path: '/admin/patients', icon: 'bi-people' },
  { name: 'Reports', path: '/admin/reports', icon: 'bi-journal-richtext' },
  { name: 'Notifications', path: '/admin/notifications', icon: 'bi-bell' },
  { name: 'Settings', path: '/admin/settings', icon: 'bi-gear' }
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="brand-box">
          <div className="brand-icon">
            <i className="bi bi-hospital"></i>
          </div>
          <div>
            <h3>HealthSafe Cloud</h3>
            <p>Medical Control Center</p>
          </div>
        </div>
        <button className="sidebar-close" type="button" onClick={() => setSidebarOpen(false)}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            key={item.name}
            onClick={() => setSidebarOpen(false)}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.name}</span>
          </NavLink>
        ))}
        <button className="nav-link" type="button" onClick={() => setShowLogoutModal(true)} style={{ border: 'none', background: 'transparent', textAlign: 'left' }}>
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </button>
      </nav>

      {showLogoutModal ? (
        <div className="logout-modal-overlay" onClick={() => setShowLogoutModal(false)}>
          <div className="logout-modal" onClick={(event) => event.stopPropagation()}>
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out from the admin dashboard?</p>
            <div className="modal-actions">
              <button className="btn btn-outline-secondary rounded-pill" type="button" onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <button className="btn btn-primary rounded-pill" type="button" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="sidebar-footer">
        <div className="footer-card">
          <p>Secure care operations</p>
          <strong>All systems healthy</strong>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
