
import React, { useState } from 'react';
import './Appointments.css';
import { CalendarDays, Search } from 'lucide-react';

const initialAppointments = [
  {
    id: 'APT-001',
    patient: 'Ananya Reddy',
    doctor: 'Dr. Rahul Sharma',
    department: 'Cardiology',
    date: '2026-08-12',
    time: '10:30',
    status: 'Confirmed'
  },
  {
    id: 'APT-002',
    patient: 'Vikram Kumar',
    doctor: 'Dr. Vivek Kumar',
    department: 'Orthopedics',
    date: '2026-08-12',
    time: '11:15',
    status: 'Pending'
  },
  {
    id: 'APT-003',
    patient: 'Meera Joshi',
    doctor: 'Dr. Priya Nair',
    department: 'Pediatrics',
    date: '2026-08-12',
    time: '14:00',
    status: 'Confirmed'
  },
  {
    id: 'APT-004',
    patient: 'Rahul Verma',
    doctor: 'Dr. Anjali Reddy',
    department: 'Neurology',
    date: '2026-08-13',
    time: '09:00',
    status: 'Cancelled'
  }
];

function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    id: '',
    patient: '',
    doctor: '',
    department: '',
    date: '',
    time: '',
    status: 'Confirmed'
  });

  const openAdd = () => {
    setEditing(null);
    setForm({
      id: '',
      patient: '',
      doctor: '',
      department: '',
      date: '',
      time: '',
      status: 'Confirmed'
    });
    setShowModal(true);
  };

  const openEdit = (appointment) => {
    setEditing(appointment.id);
    setForm(appointment);
    setShowModal(true);
  };

  const saveAppointment = () => {
    if (
      !form.id ||
      !form.patient ||
      !form.doctor ||
      !form.department ||
      !form.date ||
      !form.time
    ) {
      alert('Please fill all fields');
      return;
    }

    if (editing) {
      setAppointments(
        appointments.map((a) =>
          a.id === editing ? form : a
        )
      );
    } else {
      setAppointments([...appointments, form]);
    }

    setShowModal(false);
  };

  const cancelAppointment = (id) => {
    if (window.confirm('Cancel this appointment?')) {
      setAppointments(
        appointments.map((a) =>
          a.id === id
            ? { ...a, status: 'Cancelled' }
            : a
        )
      );
    }
  };

  const filtered = appointments.filter(
    (a) =>
      a.patient
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      a.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='appointments-page'>
      <div className='page-header'>
        <div>
          <p className='eyebrow'>Hospital scheduling</p>
          <h1>Appointments</h1>
        </div>

        <button className='add-btn' onClick={openAdd}>
          + Schedule Appointment
        </button>
      </div>

      <div className='toolbar'>
        <div className='search-box'>
          <Search size={18} />
          <input
            type='text'
            placeholder='Search appointments...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className='summary-grid'>
        <div className='summary-card'>
          <h3>28</h3>
          <p>Today's Appointments</p>
        </div>

        <div className='summary-card'>
          <h3>64</h3>
          <p>Upcoming</p>
        </div>

        <div className='summary-card'>
          <h3>112</h3>
          <p>Completed</p>
        </div>

        <div className='summary-card'>
          <h3>9</h3>
          <p>Cancelled</p>
        </div>
      </div>

      <div className='appointments-table'>
        <div className='table-header'>
          <h2>Recent Appointments</h2>

          <button className='view-all-btn'>
            View All
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.patient}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.department}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  <span
                    className={`status ${appointment.status.toLowerCase()}`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className='actions'>
                  <button className='view-btn'>
                    View
                  </button>

                  <button
                    className='edit-btn'
                    onClick={() => openEdit(appointment)}
                  >
                    Edit
                  </button>

                  <button
                    className='delete-btn'
                    onClick={() =>
                      cancelAppointment(appointment.id)
                    }
                  >
                    Cancel
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
                ? 'Edit Appointment'
                : 'Schedule Appointment'}
            </h2>

            <input
              placeholder='Appointment ID'
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
              placeholder='Department'
              value={form.department}
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value
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

            <input
              type='time'
              value={form.time}
              onChange={(e) =>
                setForm({ ...form, time: e.target.value })
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
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>

            <div className='modal-actions'>
              <button onClick={saveAppointment}>
                {editing
                  ? 'Update Appointment'
                  : 'Save Appointment'}
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

export default Appointments;

