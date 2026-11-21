import React from 'react';
import './Patient.css';

const requests = [
  { hospital: 'Apollo Hospitals', doctor: 'Dr. Priya Rao', purpose: 'Cardiology consultation', requestedDate: '14 Jul 2026', status: 'Pending' },
  { hospital: 'KIMS Hospital', doctor: 'Dr. Arjun Mehta', purpose: 'Lab report review', requestedDate: '10 Jul 2026', status: 'Approved' },
  { hospital: 'MediCare Clinic', doctor: 'Dr. Neha Sharma', purpose: 'Prescription access', requestedDate: '05 Jul 2026', status: 'Rejected' }
];

const summaryCards = [
  { label: 'Pending', value: '3', icon: 'bi-clock-history' },
  { label: 'Approved', value: '8', icon: 'bi-check-circle' },
  { label: 'Rejected', value: '2', icon: 'bi-x-circle' },
  { label: 'Total', value: '13', icon: 'bi-person-lines-fill' }
];

function AccessRequests() {
  return (
    <section className="page-content">
      <div className="page-header flex-column flex-md-row">
        <div className="page-title">
          <p className="eyebrow mb-2">Care Team Permissions</p>
          <h1 className="mb-1">Access Requests</h1>
          <p className="page-subtitle">Review and manage approval requests for your care providers.</p>
        </div>
        <button className="btn btn-primary rounded-pill" type="button">
          <i className="bi bi-plus-circle me-2"></i>
          New Request
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

      <div className="page-section-card">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Hospital</th>
                <th>Doctor</th>
                <th>Purpose</th>
                <th>Requested Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={`${request.hospital}-${request.requestedDate}`}>
                  <td>{request.hospital}</td>
                  <td>{request.doctor}</td>
                  <td>{request.purpose}</td>
                  <td>{request.requestedDate}</td>
                  <td>
                    <span className={`badge-soft ${request.status === 'Pending' ? 'warning' : request.status === 'Approved' ? 'success' : 'danger'}`}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-2">
                      <button className="btn btn-outline-success btn-sm rounded-pill" type="button"><i className="bi bi-check2 me-1"></i>Approve</button>
                      <button className="btn btn-outline-danger btn-sm rounded-pill" type="button"><i className="bi bi-x-lg me-1"></i>Reject</button>
                      <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><i className="bi bi-eye me-1"></i>View</button>
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

export default AccessRequests;
