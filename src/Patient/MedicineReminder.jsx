import React from 'react';
import './Patient.css';

const summaryCards = [
  { label: "Today's Medicines", value: '6', icon: 'bi-capsule' },
  { label: 'Taken', value: '4', icon: 'bi-check2-circle' },
  { label: 'Pending', value: '2', icon: 'bi-hourglass-split' },
  { label: 'Missed', value: '0', icon: 'bi-exclamation-circle' }
];

const schedules = [
  { time: 'Morning', title: 'Metformin', dosage: '500mg', doctor: 'Dr. Priya Rao', instructions: 'Take after breakfast', status: 'Taken' },
  { time: 'Afternoon', title: 'Vitamin D3', dosage: '1000 IU', doctor: 'Dr. Priya Rao', instructions: 'Take with lunch', status: 'Pending' },
  { time: 'Night', title: 'Amlodipine', dosage: '5mg', doctor: 'Dr. Arjun Mehta', instructions: 'Take before sleep', status: 'Pending' }
];

function MedicineReminder() {
  return (
    <section className="page-content">
      <div className="page-header flex-column flex-md-row">
        <div className="page-title">
          <p className="eyebrow mb-2">Medication Schedule</p>
          <h1 className="mb-1">Medicine Reminder</h1>
          <p className="page-subtitle">Stay on top of your daily medication plan with reminders and updates.</p>
        </div>
        <button className="btn btn-primary rounded-pill" type="button">
          <i className="bi bi-plus-circle me-2"></i>
          Add Medicine
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

      <div className="row g-4">
        {schedules.map((item) => (
          <div className="col-lg-4" key={item.title}>
            <div className="page-section-card h-100">
              <div className="section-title">
                <div>
                  <h4>{item.title}</h4>
                  <p className="text-muted mb-0">{item.time} Dose</p>
                </div>
                <span className={`badge-soft ${item.status === 'Taken' ? 'success' : 'warning'}`}>{item.status}</span>
              </div>
              <div className="info-tile mb-3">
                <div className="text-muted small fw-semibold">Dosage</div>
                <div className="mt-1 fw-semibold">{item.dosage}</div>
              </div>
              <div className="info-tile mb-3">
                <div className="text-muted small fw-semibold">Doctor</div>
                <div className="mt-1 fw-semibold">{item.doctor}</div>
              </div>
              <div className="info-tile mb-3">
                <div className="text-muted small fw-semibold">Food Instructions</div>
                <div className="mt-1 fw-semibold">{item.instructions}</div>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary btn-sm rounded-pill" type="button"><i className="bi bi-check2-circle me-2"></i>Mark as Taken</button>
                <button className="btn btn-outline-secondary btn-sm rounded-pill" type="button"><i className="bi bi-pencil me-2"></i>Edit</button>
                <button className="btn btn-outline-danger btn-sm rounded-pill" type="button"><i className="bi bi-trash me-2"></i>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MedicineReminder;
