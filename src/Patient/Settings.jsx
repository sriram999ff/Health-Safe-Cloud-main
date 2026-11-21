import React from 'react';
import './Patient.css';

const settingsSections = [
  {
    title: 'Account Settings',
    icon: 'bi-person-gear',
    items: [
      ['Change Password', 'Last updated 2 months ago'],
      ['Change Email', 'swaraj.chidurala@email.com'],
      ['Change Mobile', '+91 98765 43210']
    ]
  },
  {
    title: 'Privacy',
    icon: 'bi-shield-lock',
    items: [
      ['Enable Two-Factor Authentication', 'Recommended for added security'],
      ['Biometric Login', 'Enabled on this device']
    ]
  },
  {
    title: 'Notifications',
    icon: 'bi-bell',
    items: [
      ['Medicine Notifications', 'Enabled'],
      ['Appointment Notifications', 'Enabled']
    ]
  },
  {
    title: 'Appearance',
    icon: 'bi-palette',
    items: [
      ['Dark Mode Toggle', 'Off'],
      ['Language Selection', 'English']
    ]
  },
  {
    title: 'Security',
    icon: 'bi-lock',
    items: [
      ['Secure Backup', 'Enabled'],
      ['Last Login', 'Today, 09:20 AM']
    ]
  },
  {
    title: 'Danger Zone',
    icon: 'bi-exclamation-triangle',
    items: [
      ['Download My Data', 'Available'],
      ['Deactivate Account', 'Not requested'],
      ['Delete Account', 'Permanent action']
    ]
  }
];

function Settings() {
  return (
    <section className="page-content">
      <div className="page-header flex-column flex-md-row">
        <div className="page-title">
          <p className="eyebrow mb-2">Preference Center</p>
          <h1 className="mb-1">Settings</h1>
          <p className="page-subtitle">Manage your account, privacy, notifications, and security options.</p>
        </div>
        <button className="btn btn-primary rounded-pill" type="button">
          <i className="bi bi-save me-2"></i>
          Save Changes
        </button>
      </div>

      <div className="row g-4">
        {settingsSections.map((section) => (
          <div className="col-lg-6" key={section.title}>
            <div className="page-section-card h-100">
              <div className="section-title">
                <div className="d-flex align-items-center gap-2">
                  <i className={`bi ${section.icon} fs-5 text-primary`}></i>
                  <h4>{section.title}</h4>
                </div>
              </div>
              <div className="d-flex flex-column gap-3">
                {section.items.map(([label, value]) => (
                  <div className="info-tile d-flex justify-content-between align-items-center" key={label}>
                    <div>
                      <div className="fw-semibold">{label}</div>
                      <div className="text-muted small">{value}</div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm rounded-pill" type="button">Manage</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Settings;
