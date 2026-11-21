import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PatientLayout from './PatientLayout';
import Dashboard from './Dashboard';
import HealthProfile from './HealthProfile';
import MedicalRecords from './MedicalRecords';
import AccessRequests from './AccessRequests';
import MedicineReminder from './MedicineReminder';
import Appointments from './Appointments';
import Hospitals from './Hospitals';
import Notifications from './Notifications';
import Settings from './Settings';

function Patient() {
  return (
    <Routes>
      <Route element={<PatientLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<HealthProfile />} />
        <Route path="records" element={<MedicalRecords />} />
        <Route path="access" element={<AccessRequests />} />
        <Route path="medicine" element={<MedicineReminder />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="hospitals" element={<Hospitals />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/patient" replace />} />
      </Route>
    </Routes>
  );
}

export default Patient;
