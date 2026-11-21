
import React, { useState } from 'react';
import './LabReports.css';
import { Search } from 'lucide-react';

const initialReports = [
  {
    id: 'LAB-001',
    patient: 'Ananya Reddy',
    test: 'Blood Test',
    doctor: 'Dr. Rahul Sharma',
    date: '2026-08-12',
    status: 'Completed'
  },
  {
    id: 'LAB-002',
    patient: 'Vikram Kumar',
    test: 'MRI Scan',
    doctor: 'Dr. Vivek Kumar',
    date: '2026-08-12',
    status: 'Pending'
  },
  {
    id: 'LAB-003',
    patient: 'Meera Joshi',
    test: 'X-Ray',
    doctor: 'Dr. Priya Nair',
    date: '2026-08-11',
    status: 'Completed'
  },
  {
    id: 'LAB-004',
    patient: 'Rahul Verma',
    test: 'CT Scan',
    doctor: 'Dr. Anjali Reddy',
    date: '2026-08-13',
    status: 'Critical'
  }
];

function LabReports() {
  const [reports, setReports] = useState(initialReports);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    id: '',
    patient: '',
    test: '',
    doctor: '',
    date: '',
    status: 'Pending'
  });

  const openAdd = () => {
    setEditing(null);
    setForm({
      id: '',
      patient: '',
      test: '',
      doctor: '',
      date: '',
      status: 'Pending'
    });
    setShowModal(true);
  };

  const openEdit = (report) => {
    setEditing(report.id);
    setForm(report);
    setShowModal(true);
  };

  const saveReport = () => {
    if (
      !form.id ||
      !form.patient ||
      !form.test ||
      !form.doctor ||
      !form.date
    ) {
      alert('Please fill all fields');
      return;
    }

    if (editing) {
      setReports(
        reports.map((r) =>
          r.id === editing ? form : r
        )
      );
    } else {
      setReports([...reports, form]);
    }

    setShowModal(false);
  };

  const deleteReport = (id) => {
    if (window.confirm('Delete this report?')) {
      setReports(reports.filter((r) => r.id !== id));
    }
  };

  const filtered = reports.filter(
    (report) =>
      report.patient
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      report.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalReports = reports.length;
  const completedReports = reports.filter(
    (r) => r.status === 'Completed'
  ).length;
  const pendingReports = reports.filter(
    (r) => r.status === 'Pending'
  ).length;
  const criticalReports = reports.filter(
    (r) => r.status === 'Critical'
  ).length;

  return (
    <div className='lab-page'>
      <div className='page-header'>
        <div>
          <p className='eyebrow'>
            Diagnostic Services
          </p>
          <h1>Lab Reports</h1>
        </div>

        <button className='add-btn' onClick={openAdd}>
          + Add Lab Report
        </button>
      </div>

      <div className='toolbar'>
        <div className='search-box'>
          <Search size={18} />
          <input
            type='text'
            placeholder='Search lab reports...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className='summary-grid'>
        <div className='summary-card'>
          <h3>{totalReports}</h3>
          <p>Total Reports</p>
        </div>

        <div className='summary-card'>
          <h3>{completedReports}</h3>
          <p>Completed</p>
        </div>

        <div className='summary-card'>
          <h3>{pendingReports}</h3>
          <p>Pending</p>
        </div>

        <div className='summary-card'>
          <h3>{criticalReports}</h3>
          <p>Critical Results</p>
        </div>
      </div>

      <div className='lab-table'>
        <div className='table-header'>
          <h2>Recent Lab Reports</h2>
          <button className='view-all-btn'>
            View All
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Patient</th>
              <th>Test</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.patient}</td>
                <td>{report.test}</td>
                <td>{report.doctor}</td>
                <td>{report.date}</td>
                <td>
                  <span
                    className={`status ${report.status.toLowerCase()}`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className='actions'>
                  <button className='view-btn'>
                    View
                  </button>

                  <button
                    className='edit-btn'
                    onClick={() => openEdit(report)}
                  >
                    Edit
                  </button>

                  <button className='download-btn'>
                    Download
                  </button>

                  <button
                    className='delete-btn'
                    onClick={() =>
                      deleteReport(report.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='read-more'>
          <button className='read-more-btn'>
            Read More
          </button>
        </div>
      </div>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-box'>
            <h2>
              {editing
                ? 'Edit Lab Report'
                : 'Add Lab Report'}
            </h2>

            <input
              placeholder='Report ID'
              value={form.id}
              onChange={(e) =>
                setForm({ ...form, id: e.target.value })
              }
            />

            <input
              placeholder='Patient Name'
              value={form.patient}
              onChange={(e) =>
                setForm({
                  ...form,
                  patient: e.target.value
                })
              }
            />

            <input
              placeholder='Test Name'
              value={form.test}
              onChange={(e) =>
                setForm({
                  ...form,
                  test: e.target.value
                })
              }
            />

            <input
              placeholder='Doctor Name'
              value={form.doctor}
              onChange={(e) =>
                setForm({
                  ...form,
                  doctor: e.target.value
                })
              }
            />

            <input
              type='date'
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <select
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value
                })
              }
            >
              <option>Pending</option>
              <option>Completed</option>
              <option>Critical</option>
            </select>

            <div className='modal-actions'>
              <button onClick={saveReport}>
                {editing
                  ? 'Update Report'
                  : 'Save Report'}
              </button>

              <button
                className='cancel-btn'
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LabReports;

