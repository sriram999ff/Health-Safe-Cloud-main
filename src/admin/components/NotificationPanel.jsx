import React from 'react';
import useNotifications from '../hooks/useNotifications';

function NotificationPanel() {
  const { notifications, dispatch } = useNotifications();

  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Live updates</p>
          <h2>Notifications</h2>
        </div>
        <span className="pill">{unreadCount} unread</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {notifications.slice(0, 4).map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            onClick={() => dispatch({ type: 'MARK_READ', id: notification.id })}
            role="button"
            tabIndex={0}
          >
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
    </div>
  );
}

export default NotificationPanel;
