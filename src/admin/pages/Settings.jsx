import React, { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Control center</p>
          <h1>Settings</h1>
        </div>
      </section>

      <section className="charts-grid">
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Profile</p>
              <h2>Admin Profile</h2>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label><strong>Name</strong><br /><input className="search-box" style={{ width: '100%', marginTop: '6px' }} defaultValue="Dr. Deekshitha" /></label>
            <label><strong>Email</strong><br /><input className="search-box" style={{ width: '100%', marginTop: '6px' }} defaultValue="admin@healthsafe.com" /></label>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Security</p>
              <h2>Change Password</h2>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input className="search-box" type="password" placeholder="Current password" />
            <input className="search-box" type="password" placeholder="New password" />
            <button className="btn btn-primary rounded-pill" type="button">Update Password</button>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Preferences</p>
              <h2>Notification Settings</h2>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label><input type="checkbox" defaultChecked /> Email Alerts</label>
            <label><input type="checkbox" defaultChecked /> SMS Alerts</label>
            <label><input type="checkbox" defaultChecked /> Push Notifications</label>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Theme</p>
              <h2>System Preferences</h2>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label>
              <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> Dark Mode Toggle
            </label>
            <label><strong>Language</strong><br />
              <select className="search-box" style={{ width: '100%', marginTop: '6px' }}>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </label>
          </div>
        </article>
      </section>
    </>
  );
}

export default Settings;
