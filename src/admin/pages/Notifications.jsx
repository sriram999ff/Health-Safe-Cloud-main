import React, { useMemo, useState } from 'react';
import useNotifications from '../hooks/useNotifications';

function NotificationsPage() {
  const { notifications, dispatch } = useNotifications();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return notifications.filter((item) => {
      const matchesFilter = filter === 'All' || item.priority === filter || (filter === 'Unread' ? !item.read : item.read);
      const matchesSearch = `${item.title} ${item.description}`.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    }).sort((a, b) => b.id - a.id);
  }, [notifications, filter, search]);

  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Updates</p>
          <h1>Notifications</h1>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header" style={{ flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <p className="eyebrow">Center</p>
            <h2>All Notifications</h2>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <label className="search-box" style={{ minWidth: '220px', padding: '8px 12px' }}>
              <i className="bi bi-search"></i>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search notifications" />
            </label>
            <select className="search-box" style={{ minWidth: '140px', padding: '8px 12px' }} onChange={(event) => setFilter(event.target.value)} value={filter}>
              <option value="All">All</option>
              <option value="Unread">Unread</option>
              <option value="Read">Read</option>
              <option value="High">Critical</option>
              <option value="System">System</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <button className="btn btn-primary rounded-pill" type="button" onClick={() => dispatch({ type: 'MARK_ALL_READ' })}>Mark All Read</button>
          <button className="btn btn-outline-secondary rounded-pill" type="button" onClick={() => dispatch({ type: 'CLEAR_ALL' })}>Clear All</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.map((notification) => (
            <div key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className={`bi ${notification.icon}`}></i>
                <div>
                  <strong>{notification.title}</strong>
                  <p>{notification.description}</p>
                  <small>{notification.time}</small>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="pill">{notification.priority}</span>
                <button className="btn btn-outline-secondary rounded-pill" type="button" onClick={() => dispatch({ type: 'MARK_READ', id: notification.id })}>Mark as Read</button>
                <button className="btn btn-outline-danger rounded-pill" type="button" onClick={() => dispatch({ type: 'DELETE', id: notification.id })}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default NotificationsPage;
