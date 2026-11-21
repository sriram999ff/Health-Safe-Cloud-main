import React, { useState } from 'react';
import { hospitalsData } from '../services/api';

function Hospitals() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const perPage = 3;

  const filtered = hospitalsData.filter((hospital) => {
    const matchesQuery = `${hospital.name} ${hospital.address}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || hospital.status === filter;
    return matchesQuery && matchesFilter;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Facility overview</p>
          <h1>Hospital List</h1>
        </div>
        <button className="btn btn-primary rounded-pill" type="button">+ Add Hospital</button>
      </section>

      <section className="panel">
        <div className="panel-header" style={{ flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <p className="eyebrow">Management</p>
            <h2>Hospitals</h2>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <label className="search-box" style={{ minWidth: '220px', padding: '8px 12px' }}>
              <i className="bi bi-search"></i>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search hospital" />
            </label>
            <select className="search-box" style={{ minWidth: '140px', padding: '8px 12px' }} onChange={(event) => setFilter(event.target.value)} value={filter}>
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#74809a' }}>
                <th style={{ padding: '10px 8px' }}>Name</th>
                <th style={{ padding: '10px 8px' }}>Email</th>
                <th style={{ padding: '10px 8px' }}>Address</th>
                <th style={{ padding: '10px 8px' }}>Status</th>
                <th style={{ padding: '10px 8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((hospital) => (
                <tr key={hospital.id} style={{ borderTop: '1px solid #eef3ff' }}>
                  <td style={{ padding: '10px 8px' }}>{hospital.name}</td>
                  <td style={{ padding: '10px 8px' }}>{hospital.email}</td>
                  <td style={{ padding: '10px 8px' }}>{hospital.address}</td>
                  <td style={{ padding: '10px 8px' }}><span className="pill">{hospital.status}</span></td>
                  <td style={{ padding: '10px 8px' }}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button className="btn btn-primary rounded-pill" type="button" style={{ padding: '6px 10px' }}>View</button>
                      <button className="btn btn-outline-secondary rounded-pill" type="button" style={{ padding: '6px 10px' }}>Edit</button>
                      <button className="btn btn-outline-danger rounded-pill" type="button" style={{ padding: '6px 10px' }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel-header" style={{ marginTop: '12px' }}>
          <span className="pill">Showing {paginated.length} of {filtered.length} hospitals</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-outline-secondary rounded-pill" type="button" onClick={() => setPage((current) => Math.max(1, current - 1))}>Previous</button>
            <button className="btn btn-primary rounded-pill" type="button" onClick={() => setPage((current) => Math.min(totalPages, current + 1))}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hospitals;
