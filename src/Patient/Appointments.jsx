import React from 'react';
import './Patient.css';

const summaryCards = [
  { label: 'Upcoming', value: '3', icon: 'bi-calendar2-week' },
  { label: 'Completed', value: '12', icon: 'bi-check2-circle' },
  { label: 'Cancelled', value: '1', icon: 'bi-x-circle' },
  { label: 'Pending', value: '2', icon: 'bi-hourglass-split' }
];

const appointments = [
  { doctor: 'Dr. Priya Rao', hospital: 'Apollo Hospitals', department: 'Cardiology', date: '03 Aug 2026', time: '10:00 AM', status: 'Confirmed' },
  { doctor: 'Dr. Neha Sharma', hospital: 'MediCare Clinic', department: 'General Medicine', date: '20 Jul 2026', time: '02:30 PM', status: 'Completed' },
  { doctor: 'Dr. Arjun Mehta', hospital: 'KIMS Hospital', department: 'Neurology', date: '09 Jul 2026', time: '04:00 PM', status: 'Cancelled' }
];

function Appointments() {
  return (
    <section className="page-content">
      <div className="page-header flex-column flex-md-row">
        <div className="page-title">
          <p className="eyebrow mb-2">Care Schedule</p>
          <h1 className="mb-1">Appointments</h1>
          <p className="page-subtitle">Track upcoming consultations and view your appointment history.</p>
        </div>
        <button className="btn btn-primary rounded-pill" type="button">
          <i className="bi bi-calendar-plus me-2"></i>
          Book Appointment
        </button>
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

      <div className="page-section-card mb-4">
        <div className="section-title">
          <div>
            <h4>Upcoming Appointment</h4>
            <p className="text-muted mb-0">Your next consultation is scheduled soon.</p>
          </div>
          <span className="badge-soft success">Confirmed</span>
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="info-tile">
              <div className="text-muted small fw-semibold">Doctor</div>
              <div className="mt-1 fw-semibold">Dr. Priya Rao</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-tile">
              <div className="text-muted small fw-semibold">Hospital</div>
              <div className="mt-1 fw-semibold">Apollo Hospitals</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-tile">
              <div className="text-muted small fw-semibold">Department</div>
              <div className="mt-1 fw-semibold">Cardiology</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-tile">
              <div className="text-muted small fw-semibold">Date & Time</div>
              <div className="mt-1 fw-semibold">03 Aug 2026, 10:00 AM</div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-2 mt-3">
          <button className="btn btn-outline-primary rounded-pill" type="button"><i className="bi bi-camera-video me-2"></i>Join Consultation</button>
          <button className="btn btn-outline-secondary rounded-pill" type="button"><i className="bi bi-calendar2-event me-2"></i>Reschedule</button>
          <button className="btn btn-outline-danger rounded-pill" type="button"><i className="bi bi-x-circle me-2"></i>Cancel</button>
        </div>
      </div>

      <div className="page-section-card">
        <div className="section-title">
          <div>
            <h4>Appointment History</h4>
            <p className="text-muted mb-0">Past consultations and follow-up visits.</p>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Hospital</th>
                <th>Department</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={`${appointment.doctor}-${appointment.date}`}>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.hospital}</td>
                  <td>{appointment.department}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>
                    <span className={`badge-soft ${appointment.status === 'Completed' ? 'success' : appointment.status === 'Confirmed' ? 'info' : 'danger'}`}>{appointment.status}</span>
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-2">
                      <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><i className="bi bi-file-earmark-medical me-1"></i>Prescription</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Appointments;
