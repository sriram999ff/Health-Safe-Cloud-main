
import React, { useState } from 'react';
import './PatientRecords.css';
import {
  Search,
  Users,
  Shield,
  Share2,
  Clock,
  Eye,
  Pencil,
  Trash2,
  ChevronDown
} from 'lucide-react';

const initialPatients = [
  {
    id: 'PT-001',
    name: 'Ananya Reddy',
    department: 'Cardiology',
    doctor: 'Dr. Rajesh Sharma',
    status: 'Active',
    updated: '02 Aug 2026'
  },
  {
    id: 'PT-002',
    name: 'Vikram Kumar',
    department: 'Neurology',
    doctor: 'Dr. Meera Nair',
    status: 'Active',
    updated: '01 Aug 2026'
  },
  {
    id: 'PT-003',
    name: 'Meera Joshi',
    department: 'Pediatrics',
    doctor: 'Dr. Arjun Patel',
    status: 'Active',
    updated: '31 Jul 2026'
  },
  {
    id: 'PT-004',
    name: 'Rahul Verma',
    department: 'Orthopedics',
    doctor: 'Dr. Sunil Kumar',
    status: 'Pending',
    updated: '31 Jul 2026'
  }
];

function PatientRecords() {
  const [patients, setPatients] = useState(initialPatients);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    id: '',
    name: '',
    department: '',
    doctor: '',
    status: 'Active',
    updated: '02 Aug 2026'
  });

  const openAdd = () => {
    setEditing(null);
    setForm({
      id: '',
      name: '',
      department: '',
      doctor: '',
      status: 'Active',
      updated: '02 Aug 2026'
    });
    setShowModal(true);
  };

  const openEdit = (patient) => {
    setEditing(patient.id);
    setForm(patient);
    setShowModal(true);
  };

  const savePatient = () => {
    if (!form.id || !form.name || !form.department || !form.doctor) {
      alert('Please fill all fields');
      return;
    }

    if (editing) {
      setPatients(patients.map((p) => (p.id === editing ? form : p)));
    } else {
      setPatients([...patients, form]);
    }

    setShowModal(false);
  };

  const deletePatient = (id) => {
    if (window.confirm('Delete this patient record?')) {
      setPatients(patients.filter((p) => p.id !== id));
    }
  };

  const filtered = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalPatients = patients.length;
  const activeRecords = patients.filter((p) => p.status === 'Active').length;
  const sharedRecords = 31;
  const pendingRequests = patients.filter((p) => p.status === 'Pending').length;

  return (
    <div className='patient-page'>
      <div className='page-header'>
        <div>
          <p className='eyebrow'>Electronic Health Records</p>
          <h1>Patient Records</h1>
        </div>

        <button className='add-btn' onClick={openAdd}>
          + Add Patient
        </button>
      </div>

      <div className='toolbar'>
        <div className='search-box'>
          <Search size={18} />
          <input
            type='text'
            placeholder='Search patient records...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className='summary-grid'>
        <div className='summary-card'>
          <div className='summary-icon users'>
            <Users size={22} />
          </div>
          <div>
            <p>Total Patients</p>
            <h3>{totalPatients}</h3>
            <span>+12 this month</span>
          </div>
        </div>

        <div className='summary-card'>
          <div className='summary-icon shield'>
            <Shield size={22} />
          </div>
          <div>
            <p>Active Records</p>
            <h3>{activeRecords}</h3>
            <span>93.9% active</span>
          </div>
        </div>

        <div className='summary-card'>
          <div className='summary-icon share'>
            <Share2 size={22} />
          </div>
          <div>
            <p>Shared Records</p>
            <h3>{sharedRecords}</h3>
            <span>16.8% shared</span>
          </div>
        </div>

        <div className='summary-card'>
          <div className='summary-icon clock'>
            <Clock size={22} />
          </div>
          <div>
            <p>Pending Requests</p>
            <h3>{pendingRequests}</h3>
            <span>4 new today</span>
          </div>
        </div>
      </div>

      <div className='records-table'>
        <div className='table-header'>
          <h2>Recent Patient Records</h2>
          <button className='view-all-btn'>View All</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.department}</td>
                <td>{patient.doctor}</td>
                <td>
                  <span className={`status ${patient.status.toLowerCase()}`}>
                    {patient.status}
                  </span>
                </td>
                <td>{patient.updated}</td>
                <td className='actions'>
                  <button className='icon-action view'>
                    <Eye size={16} />
                  </button>

                  <button
                    className='icon-action edit'
                    onClick={() => openEdit(patient)}
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className='icon-action delete'
                    onClick={() => deletePatient(patient.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='read-more'>
          <button className='read-more-btn'>
            Read More
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-box'>
            <h2>{editing ? 'Edit Patient' : 'Add Patient'}</h2>

            <input
              placeholder='Patient ID'
              value={form.id}
              onChange={(e) => setForm({ ...form, id: e.target.value })}
            />

            <input
              placeholder='Patient Name'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder='Department'
              value={form.department}
              onChange={(e) =>
                setForm({ ...form, department: e.target.value })
              }
            />

            <input
              placeholder='Doctor Name'
              value={form.doctor}
              onChange={(e) => setForm({ ...form, doctor: e.target.value })}
            />

            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>

            <div className='modal-actions'>
              <button onClick={savePatient}>
                {editing ? 'Update Patient' : 'Save Patient'}
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

export default PatientRecords;

