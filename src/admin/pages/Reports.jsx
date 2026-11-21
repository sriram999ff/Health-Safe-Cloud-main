import React from 'react';
import { reportsData } from '../services/api';

function Reports() {
  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Reporting center</p>
          <h1>Reports</h1>
        </div>
      </section>

      <section className="stats-grid">
        {reportsData.map((report) => (
          <article key={report.id} className="stat-card">
            <div className="stat-card-top">
              <span>{report.title}</span>
              <span className="trend up">Ready</span>
            </div>
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
              <button className="btn btn-primary rounded-pill" type="button">Generate</button>
              <button className="btn btn-outline-secondary rounded-pill" type="button">Download PDF</button>
              <button className="btn btn-outline-secondary rounded-pill" type="button">Preview</button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Reports;
