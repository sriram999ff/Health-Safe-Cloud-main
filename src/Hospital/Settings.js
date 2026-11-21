
import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [settings, setSettings] = useState({
    hospitalName: 'City Care Hospital',
    adminName: 'Dr. Aliveni',
    email: 'admin@citycare.com',
    phone: '9876543210',
    password: '',
    confirmPassword: '',
    emailNotifications: true,
    smsNotifications: false,
    systemAlerts: true,
    darkMode: false,
    autoBackup: true,
    language: 'English'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSave = () => {
    if (
      settings.password &&
      settings.password !== settings.confirmPassword
    ) {
      alert('Passwords do not match');
      return;
    }

    setMessage('Settings updated successfully');

    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleReset = () => {
    if (window.confirm('Reset all settings?')) {
      setSettings({
        hospitalName: 'City Care Hospital',
        adminName: 'Dr. Aliveni',
        email: 'admin@citycare.com',
        phone: '9876543210',
        password: '',
        confirmPassword: '',
        emailNotifications: true,
        smsNotifications: false,
        systemAlerts: true,
        darkMode: false,
        autoBackup: true,
        language: 'English'
      });

      setMessage('Settings reset successfully');

      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className='settings-page'>
      <div className='page-header'>
        <div>
          <p className='eyebrow'>
            Hospital Administration
          </p>
          <h1>Settings</h1>
        </div>
      </div>

      {message && (
        <div className='success-message'>
          {message}
        </div>
      )}

      <div className='settings-container'>
        {/* Profile Settings */}
        <div className='settings-card'>
          <h2>Profile Settings</h2>

          <div className='form-group'>
            <label>Hospital Name</label>
            <input
              type='text'
              name='hospitalName'
              value={settings.hospitalName}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label>Administrator Name</label>
            <input
              type='text'
              name='adminName'
              value={settings.adminName}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label>Email Address</label>
            <input
              type='email'
              name='email'
              value={settings.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label>Phone Number</label>
            <input
              type='tel'
              name='phone'
              value={settings.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Security */}
        <div className='settings-card'>
          <h2>Security Settings</h2>

          <div className='form-group'>
            <label>New Password</label>
            <input
              type='password'
              name='password'
              value={settings.password}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              value={settings.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Notifications */}
        <div className='settings-card'>
          <h2>Notification Settings</h2>

          <div className='toggle-row'>
            <label>Email Notifications</label>
            <input
              type='checkbox'
              name='emailNotifications'
              checked={settings.emailNotifications}
              onChange={handleChange}
            />
          </div>

          <div className='toggle-row'>
            <label>SMS Notifications</label>
            <input
              type='checkbox'
              name='smsNotifications'
              checked={settings.smsNotifications}
              onChange={handleChange}
            />
          </div>

          <div className='toggle-row'>
            <label>System Alerts</label>
            <input
              type='checkbox'
              name='systemAlerts'
              checked={settings.systemAlerts}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Preferences */}
        <div className='settings-card'>
          <h2>System Preferences</h2>

          <div className='toggle-row'>
            <label>Dark Mode</label>
            <input
              type='checkbox'
              name='darkMode'
              checked={settings.darkMode}
              onChange={handleChange}
            />
          </div>

          <div className='toggle-row'>
            <label>Auto Backup</label>
            <input
              type='checkbox'
              name='autoBackup'
              checked={settings.autoBackup}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label>Language</label>
            <select
              name='language'
              value={settings.language}
              onChange={handleChange}
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Telugu</option>
            </select>
          </div>
        </div>
      </div>

      <div className='settings-actions'>
        <button
          className='save-btn'
          onClick={handleSave}
        >
          Save Changes
        </button>

        <button
          className='reset-btn'
          onClick={handleReset}
        >
          Reset Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;

