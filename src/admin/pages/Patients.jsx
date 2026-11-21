import React, { useState } from 'react';
import { patientsData } from '../services/api';

function Patients() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 3;

  const filtered = patientsData.filter((patient) => `${patient.name} ${patient.hospital}`.toLowerCase().includes(query.toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Patient records</p>
          <h1>Patients</h1>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header" style={{ flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <p className="eyebrow">Directory</p>
            <h2>Patient List</h2>
          </div>
          <label className="search-box" style={{ minWidth: '240px', padding: '8px 12px' }}>
            <i className="bi bi-search"></i>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search patient" />
          </label>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#74809a' }}>
                <th style={{ padding: '10px 8px' }}>Patient ID</th>
                <th style={{ padding: '10px 8px' }}>Patient Name</th>
                <th style={{ padding: '10px 8px' }}>Age</th>
                <th style={{ padding: '10px 8px' }}>Gender</th>
                <th style={{ padding: '10px 8px' }}>Hospital</th>
                <th style={{ padding: '10px 8px' }}>Doctor</th>
                <th style={{ padding: '10px 8px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((patient) => (
                <tr key={patient.id} style={{ borderTop: '1px solid #eef3ff' }}>
                  <td style={{ padding: '10px 8px' }}>{patient.id}</td>
                  <td style={{ padding: '10px 8px' }}>{patient.name}</td>
                  <td style={{ padding: '10px 8px' }}>{patient.age}</td>
                  <td style={{ padding: '10px 8px' }}>{patient.gender}</td>
                  <td style={{ padding: '10px 8px' }}>{patient.hospital}</td>
                  <td style={{ padding: '10px 8px' }}>{patient.doctor}</td>
                  <td style={{ padding: '10px 8px' }}><span className="pill">{patient.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel-header" style={{ marginTop: '12px' }}>
          <span className="pill">Showing {paginated.length} patients</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-outline-secondary rounded-pill" type="button" onClick={() => setPage((current) => Math.max(1, current - 1))}>Previous</button>
            <button className="btn btn-primary rounded-pill" type="button" onClick={() => setPage((current) => Math.min(totalPages, current + 1))}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Patients;
