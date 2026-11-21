import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useNotifications from '../hooks/useNotifications';

function Topbar({ setSidebarOpen }) {
  const navigate = useNavigate();
  const { notifications, dispatch } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter((item) => !item.read).length;
  const recentNotifications = notifications.slice(0, 4);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="sidebar-toggle" type="button" onClick={() => setSidebarOpen(true)}>
          <i className="bi bi-list"></i>
        </button>
        <label className="search-box">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search anything..." />
        </label>
      </div>

      <div className="topbar-right">
        <div style={{ position: 'relative' }}>
          <button className="icon-button" type="button" onClick={() => setShowNotifications((value) => !value)}>
            <i className="bi bi-bell"></i>
            <span className="badge">{unreadCount}</span>
          </button>
          {showNotifications ? (
            <div className="notification-panel">
              <div className="panel-header">
                <div>
                  <p className="eyebrow">Live updates</p>
                  <h2>Notifications</h2>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {recentNotifications.map((notification) => (
                  <div key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`} onClick={() => dispatch({ type: 'MARK_READ', id: notification.id })} role="button" tabIndex={0}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className={`bi ${notification.icon}`}></i>
                      <div>
                        <strong>{notification.title}</strong>
                        <p>{notification.description}</p>
                        <small>{notification.time}</small>
                      </div>
                    </div>
                    <span className="pill">{notification.priority}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary rounded-pill" type="button" style={{ marginTop: '10px' }} onClick={() => navigate('/admin/notifications')}>View All</button>
            </div>
          ) : null}
        </div>
        <button className="icon-button" type="button">
          <i className="bi bi-chat-left-dots"></i>
          <span className="badge">5</span>
        </button>
        <button className="icon-button" type="button">
          <i className="bi bi-gear"></i>
        </button>
        <div className="profile-card">
          <div className="avatar">DS</div>
          <div>
            <strong>Dr. Deekshitha</strong>
            <p>Admin</p>
          </div>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
