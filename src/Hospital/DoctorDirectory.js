
import React, { useState } from 'react';
import './DoctorDirectory.css';

const departments = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'General Medicine',
  'Dermatology',
  'ENT',
  'Oncology'
];

const doctorNames = [
  'Dr. Rahul Sharma','Dr. Anjali Reddy','Dr. Vivek Kumar','Dr. Priya Nair',
  'Dr. Arjun Mehta','Dr. Sneha Rao','Dr. Kiran Reddy','Dr. Neha Gupta',
  'Dr. Amit Verma','Dr. Meera Joshi','Dr. Sanjay Kumar','Dr. Pooja Sharma',
  'Dr. Rohit Singh','Dr. Kavya Menon','Dr. Harish Patel','Dr. Divya Rao',
  'Dr. Vikram Reddy','Dr. Lakshmi Nair','Dr. Suresh Iyer','Dr. Nandini Gupta',
  'Dr. Gopal Krishna','Dr. Rekha Sharma','Dr. Ajay Verma','Dr. Bhavana Reddy',
  'Dr. Manoj Rao','Dr. Ritu Menon','Dr. Ashwin Kumar','Dr. Deepa Patel',
  'Dr. Naveen Gupta','Dr. Shweta Reddy','Dr. Mohan Rao','Dr. Pallavi Nair',
  'Dr. Karthik Sharma','Dr. Sahana Iyer','Dr. Vinay Kumar','Dr. Aditi Reddy',
  'Dr. Tejas Verma','Dr. Shruti Rao','Dr. Ramesh Gupta','Dr. Preethi Menon',
  'Dr. Varun Patel','Dr. Nikhil Reddy'
];

const initialDoctors = doctorNames.map((name, index) => ({
  id: `DOC-${101 + index}`,
  name,
  department: departments[index % departments.length],
  experience: `${5 + (index % 15)}`,
  phone: `98${String(10000000 + index).slice(-8)}`,
  status: index < 34 ? 'Available' : index < 40 ? 'On Duty' : 'On Leave'
}));

function DoctorDirectory() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    id: '',
    name: '',
    department: '',
    experience: '',
    phone: '',
    status: 'Available'
  });

  const filtered = doctors.filter((doctor) => {
    const matchSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.id.toLowerCase().includes(search.toLowerCase());

    const matchDepartment =
      department === 'All' || doctor.department === department;

    return matchSearch && matchDepartment;
  });

  const visibleDoctors = showAll ? filtered : filtered.slice(0, 6);

  const totalDoctors = doctors.length;
  const availableDoctors = doctors.filter(
    (d) => d.status === 'Available'
  ).length;
  const onDutyDoctors = doctors.filter(
    (d) => d.status === 'On Duty'
  ).length;
  const totalDepartments = new Set(
    doctors.map((d) => d.department)
  ).size;

  const openAdd = () => {
    setEditing(null);
    setForm({
      id: `DOC-${101 + doctors.length}`,
      name: '',
      department: '',
      experience: '',
      phone: '',
      status: 'Available'
    });
    setShowModal(true);
  };

  const openEdit = (doctor) => {
    setEditing(doctor.id);
    setForm(doctor);
    setShowModal(true);
  };

  const saveDoctor = () => {
    if (
      !form.name ||
      !form.department ||
      !form.experience ||
      !form.phone
    ) {
      alert('Please fill all fields');
      return;
    }

    if (editing) {
      setDoctors(
        doctors.map((d) => (d.id === editing ? form : d))
      );
    } else {
      setDoctors([...doctors, form]);
    }

    setShowModal(false);
  };

  const deleteDoctor = (id) => {
    if (window.confirm('Delete this doctor?')) {
      setDoctors(doctors.filter((d) => d.id !== id));
    }
  };

  return (
    <div className='doctor-page'>
      <div className='doctor-header'>
        <div>
          <p className='eyebrow'>Medical staff management</p>
          <h1>Doctor Directory</h1>
        </div>

        <button className='add-btn' onClick={openAdd}>
          + Add Doctor
        </button>
      </div>

      <div className='toolbar'>
        <input
          type='text'
          placeholder='Search doctor...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>All</option>
          {departments.map((dept) => (
            <option key={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <div className='summary-grid'>
        <div className='summary-card'>
          <h3>{totalDoctors}</h3>
          <p>Total Doctors</p>
        </div>

        <div className='summary-card'>
          <h3>{availableDoctors}</h3>
          <p>Currently Available</p>
        </div>

        <div className='summary-card'>
          <h3>{onDutyDoctors}</h3>
          <p>On Duty</p>
        </div>

        <div className='summary-card'>
          <h3>{totalDepartments}</h3>
          <p>Departments</p>
        </div>
      </div>

      <div className='doctor-grid'>
        {visibleDoctors.map((doctor) => (
          <div className='doctor-card' key={doctor.id}>
            <div className='doctor-top'>
              <div className='avatar'>
                {doctor.name
                  .split(' ')
                  .slice(1)
                  .map((n) => n[0])
                  .join('')}
              </div>

              <span className='status'>{doctor.status}</span>
            </div>

            <h3>{doctor.name}</h3>
            <p>{doctor.id}</p>

            <div className='info'>
              <div>
                <span>Department</span>
                <strong>{doctor.department}</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>{doctor.experience} Years</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{doctor.phone}</strong>
              </div>
            </div>

            <div className='actions'>
              <button className='edit' onClick={() => openEdit(doctor)}>
                Edit
              </button>

              <button
                className='delete'
                onClick={() => deleteDoctor(doctor.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length > 6 && (
        <div className='read-more'>
          <button
            className='read-more-btn'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Read More'}
          </button>
        </div>
      )}

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-box'>
            <h2>{editing ? 'Edit Doctor' : 'Add Doctor'}</h2>

            <input
              placeholder='Doctor ID'
              value={form.id}
              onChange={(e) =>
                setForm({ ...form, id: e.target.value })
              }
            />

            <input
              placeholder='Doctor Name'
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <select
              value={form.department}
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value
                })
              }
            >
              <option value=''>Select Department</option>
              {departments.map((dept) => (
                <option key={dept}>{dept}</option>
              ))}
            </select>

            <input
              placeholder='Experience'
              value={form.experience}
              onChange={(e) =>
                setForm({
                  ...form,
                  experience: e.target.value
                })
              }
            />

            <input
              placeholder='Phone'
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option>Available</option>
              <option>On Duty</option>
              <option>On Leave</option>
            </select>

            <div className='modal-actions'>
              <button onClick={saveDoctor}>
                {editing ? 'Update' : 'Save'}
              </button>

              <button
                className='cancel'
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorDirectory;

