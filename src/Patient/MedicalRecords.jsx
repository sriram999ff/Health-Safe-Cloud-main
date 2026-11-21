import React, { useState } from 'react';
import './Patient.css';

const records = [
  { name: 'Blood Test Report', hospital: 'Apollo Hospitals', doctor: 'Dr. Priya Rao', date: '12 Jul 2026', size: '1.2 MB', type: 'Lab Report', status: 'Verified' },
  { name: 'ECG Summary', hospital: 'KIMS Hospital', doctor: 'Dr. Arjun Mehta', date: '02 Jul 2026', size: '845 KB', type: 'Cardiology', status: 'Reviewed' },
  { name: 'Prescription Update', hospital: 'MediCare Clinic', doctor: 'Dr. Neha Sharma', date: '21 Jun 2026', size: '320 KB', type: 'Prescription', status: 'Active' }
];

const summaryCards = [
  { label: 'Total Records', value: '24', icon: 'bi-file-earmark-medical' },
  { label: 'Reports', value: '10', icon: 'bi-clipboard2-pulse' },
  { label: 'Prescriptions', value: '8', icon: 'bi-capsule' },
  { label: 'Lab Results', value: '6', icon: 'bi-flask' }
];

function MedicalRecords() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const visibleRecords = records.filter((record) => {
    const matchesQuery = `${record.name} ${record.hospital} ${record.doctor}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || record.type === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <section className="page-content">
      <div className="page-header flex-column flex-md-row">
        <div className="page-title">
          <p className="eyebrow mb-2">Digital Health Records</p>
          <h1 className="mb-1">Medical Records</h1>
          <p className="page-subtitle">Search and manage your uploaded medical documents with ease.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline-primary rounded-pill" type="button">
            <i className="bi bi-upload me-2"></i>
            Upload Record
          </button>
          <button className="btn btn-primary rounded-pill" type="button">
            <i className="bi bi-funnel me-2"></i>
            Filter
          </button>
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

      <div className="page-section-card mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-5">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
              <input className="form-control border-start-0" placeholder="Search records" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
          </div>
          <div className="col-md-4">
            <select className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Types</option>
              <option value="Lab Report">Lab Report</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Prescription">Prescription</option>
            </select>
          </div>
          <div className="col-md-3 text-md-end">
            <button className="btn btn-primary rounded-pill" type="button">
              <i className="bi bi-plus-circle me-2"></i>
              Upload Record
            </button>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {visibleRecords.map((record) => (
          <div className="col-lg-6" key={record.name}>
            <div className="page-section-card h-100">
              <div className="section-title">
                <div>
                  <h4>{record.name}</h4>
                  <p className="text-muted mb-0">{record.type}</p>
                </div>
                <span className="badge-soft success">{record.status}</span>
              </div>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="info-tile">
                    <div className="text-muted small fw-semibold">Hospital</div>
                    <div className="mt-1 fw-semibold">{record.hospital}</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-tile">
                    <div className="text-muted small fw-semibold">Doctor</div>
                    <div className="mt-1 fw-semibold">{record.doctor}</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-tile">
                    <div className="text-muted small fw-semibold">Date</div>
                    <div className="mt-1 fw-semibold">{record.date}</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-tile">
                    <div className="text-muted small fw-semibold">File Size</div>
                    <div className="mt-1 fw-semibold">{record.size}</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><i className="bi bi-eye me-2"></i>View</button>
                <button className="btn btn-outline-secondary btn-sm rounded-pill" type="button"><i className="bi bi-download me-2"></i>Download</button>
                <button className="btn btn-outline-success btn-sm rounded-pill" type="button"><i className="bi bi-share me-2"></i>Share</button>
                <button className="btn btn-outline-danger btn-sm rounded-pill" type="button"><i className="bi bi-trash me-2"></i>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MedicalRecords;
