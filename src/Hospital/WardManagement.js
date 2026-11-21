
import React, { useState } from 'react';
import './WardManagement.css';
import { Search } from 'lucide-react';

const initialWards = [
  {
    id: 'WARD-101',
    wardNo: 'A-101',
    type: 'General',
    capacity: 20,
    occupied: 16,
    nurse: 'Nurse Kavya',
    status: 'Available'
  },
  {
    id: 'WARD-102',
    wardNo: 'B-204',
    type: 'ICU',
    capacity: 12,
    occupied: 10,
    nurse: 'Nurse Sneha',
    status: 'Available'
  },
  {
    id: 'WARD-103',
    wardNo: 'C-302',
    type: 'Pediatrics',
    capacity: 18,
    occupied: 18,
    nurse: 'Nurse Priya',
    status: 'Full'
  },
  {
    id: 'WARD-104',
    wardNo: 'D-110',
    type: 'Emergency',
    capacity: 15,
    occupied: 11,
    nurse: 'Nurse Anjali',
    status: 'Available'
  }
];

function WardManagement() {
  const [wards, setWards] = useState(initialWards);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    id: '',
    wardNo: '',
    type: '',
    capacity: '',
    occupied: '',
    nurse: '',
    status: 'Available'
  });

  const openAdd = () => {
    setEditing(null);
    setForm({
      id: '',
      wardNo: '',
      type: '',
      capacity: '',
      occupied: '',
      nurse: '',
      status: 'Available'
    });
    setShowModal(true);
  };

  const openEdit = (ward) => {
    setEditing(ward.id);
    setForm(ward);
    setShowModal(true);
  };

  const saveWard = () => {
    if (
      !form.id ||
      !form.wardNo ||
      !form.type ||
      !form.capacity ||
      !form.nurse
    ) {
      alert('Please fill all fields');
      return;
    }

    if (editing) {
      setWards(
        wards.map((w) =>
          w.id === editing ? form : w
        )
      );
    } else {
      setWards([...wards, form]);
    }

    setShowModal(false);
  };

  const dischargeWard = (id) => {
    if (window.confirm('Discharge patients from this ward?')) {
      setWards(
        wards.map((w) =>
          w.id === id
            ? {
                ...w,
                occupied: 0,
                status: 'Available'
              }
            : w
        )
      );
    }
  };

  const filtered = wards.filter(
    (ward) =>
      ward.wardNo
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      ward.type
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalWards = wards.length;
  const occupiedBeds = wards.reduce(
    (sum, ward) => sum + Number(ward.occupied),
    0
  );
  const totalBeds = wards.reduce(
    (sum, ward) => sum + Number(ward.capacity),
    0
  );
  const availableBeds = totalBeds - occupiedBeds;
  const icuWards = wards.filter(
    (ward) => ward.type === 'ICU'
  ).length;

  return (
    <div className='ward-page'>
      <div className='page-header'>
        <div>
          <p className='eyebrow'>
            Hospital Infrastructure
          </p>
          <h1>Ward Management</h1>
        </div>

        <button className='add-btn' onClick={openAdd}>
          + Add Ward
        </button>
      </div>

      <div className='toolbar'>
        <div className='search-box'>
          <Search size={18} />
          <input
            type='text'
            placeholder='Search wards...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className='summary-grid'>
        <div className='summary-card'>
          <h3>{totalWards}</h3>
          <p>Total Wards</p>
        </div>

        <div className='summary-card'>
          <h3>{occupiedBeds}</h3>
          <p>Occupied Beds</p>
        </div>

        <div className='summary-card'>
          <h3>{availableBeds}</h3>
          <p>Available Beds</p>
        </div>

        <div className='summary-card'>
          <h3>{icuWards}</h3>
          <p>ICU Wards</p>
        </div>
      </div>

      <div className='ward-table'>
        <div className='table-header'>
          <h2>Recent Ward Details</h2>
          <button className='view-all-btn'>
            View All
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Ward ID</th>
              <th>Ward No</th>
              <th>Type</th>
              <th>Capacity</th>
              <th>Occupied</th>
              <th>In-Charge Nurse</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((ward) => (
              <tr key={ward.id}>
                <td>{ward.id}</td>
                <td>{ward.wardNo}</td>
                <td>{ward.type}</td>
                <td>{ward.capacity}</td>
                <td>{ward.occupied}</td>
                <td>{ward.nurse}</td>
                <td>
                  <span
                    className={`status ${ward.status.toLowerCase()}`}
                  >
                    {ward.status}
                  </span>
                </td>
                <td className='actions'>
                  <button className='view-btn'>
                    View
                  </button>

                  <button
                    className='edit-btn'
                    onClick={() => openEdit(ward)}
                  >
                    Edit
                  </button>

                  <button className='transfer-btn'>
                    Transfer
                  </button>

                  <button
                    className='delete-btn'
                    onClick={() =>
                      dischargeWard(ward.id)
                    }
                  >
                    Discharge
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
              {editing ? 'Edit Ward' : 'Add Ward'}
            </h2>

            <input
              placeholder='Ward ID'
              value={form.id}
              onChange={(e) =>
                setForm({ ...form, id: e.target.value })
              }
            />

            <input
              placeholder='Ward Number'
              value={form.wardNo}
              onChange={(e) =>
                setForm({
                  ...form,
                  wardNo: e.target.value
                })
              }
            />

            <input
              placeholder='Ward Type'
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type: e.target.value
                })
              }
            />

            <input
              type='number'
              placeholder='Capacity'
              value={form.capacity}
              onChange={(e) =>
                setForm({
                  ...form,
                  capacity: e.target.value
                })
              }
            />

            <input
              type='number'
              placeholder='Occupied Beds'
              value={form.occupied}
              onChange={(e) =>
                setForm({
                  ...form,
                  occupied: e.target.value
                })
              }
            />

            <input
              placeholder='In-Charge Nurse'
              value={form.nurse}
              onChange={(e) =>
                setForm({
                  ...form,
                  nurse: e.target.value
                })
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
              <option>Available</option>
              <option>Full</option>
              <option>Maintenance</option>
            </select>

            <div className='modal-actions'>
              <button onClick={saveWard}>
                {editing ? 'Update Ward' : 'Save Ward'}
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

export default WardManagement;

