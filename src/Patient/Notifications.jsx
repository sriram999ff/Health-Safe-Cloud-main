import React from 'react';
import './Patient.css';

const notifications = [
  { title: 'Appointment Reminder', description: 'Your cardiology consultation is scheduled tomorrow at 10:00 AM.', date: '01 Aug 2026', time: '08:30 AM', icon: 'bi-calendar2-week', status: 'Unread' },
  { title: 'Medicine Due', description: 'Time to take your afternoon dose of Vitamin D3.', date: '01 Aug 2026', time: '01:00 PM', icon: 'bi-capsule', status: 'Unread' },
  { title: 'Lab Report Ready', description: 'Your latest blood report is now available for download.', date: '31 Jul 2026', time: '05:15 PM', icon: 'bi-file-earmark-medical', status: 'Read' }
];

const summaryCards = [
  { label: 'Unread', value: '4', icon: 'bi-bell' },
  { label: 'Appointments', value: '2', icon: 'bi-calendar2-check' },
  { label: 'Medicines', value: '1', icon: 'bi-capsule' },
  { label: 'Reports', value: '1', icon: 'bi-file-earmark-medical' }
];

function Notifications() {
  return (
    <section className="page-content">
      <div className="page-header flex-column flex-md-row">
        <div className="page-title">
          <p className="eyebrow mb-2">Updates Center</p>
          <h1 className="mb-1">Notifications</h1>
          <p className="page-subtitle">Stay informed about appointments, medicines, reports, and payments.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline-primary rounded-pill" type="button"><i className="bi bi-check2-all me-2"></i>Mark All Read</button>
          <button className="btn btn-primary rounded-pill" type="button"><i className="bi bi-trash me-2"></i>Clear All</button>
        </div>
      </div>

      <div className="summary-grid mb-4">
        {summaryCards.map((item) => (
          <div className="summary-card" key={item.label}>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-muted small">{item.label}</span>
              <div className="summary-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>
            </div>
            <h3>{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="page-section-card">
        {notifications.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-icon">
              <i className={`bi ${item.icon}`}></i>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2">
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
                <span className={`badge-soft ${item.status === 'Unread' ? 'warning' : 'success'}`}>{item.status}</span>
              </div>
              <div className="mt-2 text-muted small">
                <span>{item.date}</span> • <span>{item.time}</span>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><i className="bi bi-check2 me-2"></i>Mark as Read</button>
                <button className="btn btn-outline-danger btn-sm rounded-pill" type="button"><i className="bi bi-trash me-2"></i>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Notifications;
