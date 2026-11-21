import React, { useState } from 'react';
import { requestsData } from '../services/api';

function HospitalRequests() {
  const [requests, setRequests] = useState(requestsData);

  const handleApprove = (id) => {
    setRequests((current) => current.filter((item) => item.id !== id));
  };

  const handleReject = (id) => {
    setRequests((current) => current.filter((item) => item.id !== id));
  };

  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Verification queue</p>
          <h1>Hospital Requests</h1>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Pending requests</p>
            <h2>Pending Hospital Registrations</h2>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {requests.map((request) => (
            <div key={request.id} className="notification-item" style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <strong>{request.hospitalName}</strong>
                <p>{request.email}</p>
                <p>{request.address}</p>
                <small>License: {request.licenseNumber} • Requested: {request.requestedDate}</small>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                <span className="pill">{request.status}</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary rounded-pill" type="button" onClick={() => handleApprove(request.id)}>Approve</button>
                  <button className="btn btn-outline-danger rounded-pill" type="button" onClick={() => handleReject(request.id)}>Reject</button>
                  <button className="btn btn-outline-secondary rounded-pill" type="button">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HospitalRequests;
