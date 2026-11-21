import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './Admin.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Hospitals from './pages/Hospitals';
import HospitalRequests from './pages/HospitalRequests';
import Analytics from './pages/Analytics';
import Patients from './pages/Patients';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-shell">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="content-area">
        <Topbar setSidebarOpen={setSidebarOpen} />

        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="requests" element={<HospitalRequests />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="patients" element={<Patients />} />
          <Route path="reports" element={<Reports />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default Admin;

