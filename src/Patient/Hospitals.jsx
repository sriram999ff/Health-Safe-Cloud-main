import React, { useState } from 'react';
import './Patient.css';

const hospitals = [
  { name: 'Apollo Hospitals', rating: '4.8', distance: '2.3 km', address: 'Banjara Hills, Hyderabad', emergency: '24/7', doctors: '48', specialty: 'Cardiology' },
  { name: 'KIMS Hospital', rating: '4.6', distance: '4.1 km', address: 'Secunderabad', emergency: '24/7', doctors: '36', specialty: 'Neurology' },
  { name: 'MediCare Clinic', rating: '4.5', distance: '1.8 km', address: 'Gachibowli', emergency: 'Available', doctors: '22', specialty: 'General Medicine' }
];

const summaryCards = [
  { label: 'Nearby Hospitals', value: '12', icon: 'bi-hospital' },
  { label: 'Emergency Hospitals', value: '4', icon: 'bi-activity' },
  { label: 'Partner Hospitals', value: '7', icon: 'bi-shield-check' },
  { label: 'Doctors Available', value: '96', icon: 'bi-person-hearts' }
];

function Hospitals() {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('All');

  const visibleHospitals = hospitals.filter((hospital) => {
    const matchesQuery = `${hospital.name} ${hospital.address}`.toLowerCase().includes(query.toLowerCase());
    const matchesSpecialty = specialty === 'All' || hospital.specialty === specialty;
    return matchesQuery && matchesSpecialty;
  });

  return (
    <section className="page-content">
      <div className="page-header flex-column flex-md-row">
        <div className="page-title">
          <p className="eyebrow mb-2">Care Network</p>
          <h1 className="mb-1">Hospitals</h1>
          <p className="page-subtitle">Explore nearby hospitals, emergency facilities, and available specialists.</p>
        </div>
        <button className="btn btn-primary rounded-pill" type="button">
          <i className="bi bi-geo-alt me-2"></i>
          Directions
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
        <div className="row g-3 align-items-center">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
              <input className="form-control border-start-0" placeholder="Search hospital" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <select className="form-select" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
              <option value="All">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="General Medicine">General Medicine</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {visibleHospitals.map((hospital) => (
          <div className="col-lg-4" key={hospital.name}>
            <div className="page-section-card h-100">
              <div className="section-title">
                <div>
                  <h4>{hospital.name}</h4>
                  <p className="text-muted mb-0">{hospital.specialty}</p>
                </div>
                <span className="badge-soft info">★ {hospital.rating}</span>
              </div>
              <div className="info-tile mb-3">
                <div className="text-muted small fw-semibold">Address</div>
                <div className="mt-1 fw-semibold">{hospital.address}</div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <div className="info-tile">
                    <div className="text-muted small fw-semibold">Distance</div>
                    <div className="mt-1 fw-semibold">{hospital.distance}</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-tile">
                    <div className="text-muted small fw-semibold">Emergency</div>
                    <div className="mt-1 fw-semibold">{hospital.emergency}</div>
                  </div>
                </div>
              </div>
              <div className="info-tile mb-3">
                <div className="text-muted small fw-semibold">Available Doctors</div>
                <div className="mt-1 fw-semibold">{hospital.doctors} doctors available</div>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><i className="bi bi-eye me-2"></i>View Details</button>
                <button className="btn btn-outline-success btn-sm rounded-pill" type="button"><i className="bi bi-calendar2-plus me-2"></i>Book Appointment</button>
                <button className="btn btn-outline-secondary btn-sm rounded-pill" type="button"><i className="bi bi-map me-2"></i>Directions</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hospitals;
