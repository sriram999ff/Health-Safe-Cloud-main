
import React, { useState } from 'react';
import './BillingInvoices.css';
import { Search } from 'lucide-react';

const initialInvoices = [
  {
    id: 'INV-001',
    patient: 'Ananya Reddy',
    department: 'Cardiology',
    amount: 12500,
    date: '2026-08-12',
    status: 'Paid'
  },
  {
    id: 'INV-002',
    patient: 'Vikram Kumar',
    department: 'Orthopedics',
    amount: 8900,
    date: '2026-08-12',
    status: 'Pending'
  },
  {
    id: 'INV-003',
    patient: 'Meera Joshi',
    department: 'Pediatrics',
    amount: 5400,
    date: '2026-08-11',
    status: 'Paid'
  },
  {
    id: 'INV-004',
    patient: 'Rahul Verma',
    department: 'Neurology',
    amount: 17800,
    date: '2026-08-13',
    status: 'Pending'
  }
];

function BillingInvoices() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    id: '',
    patient: '',
    department: '',
    amount: '',
    date: '',
    status: 'Pending'
  });

  const openAdd = () => {
    setEditing(null);
    setForm({
      id: '',
      patient: '',
      department: '',
      amount: '',
      date: '',
      status: 'Pending'
    });
    setShowModal(true);
  };

  const openEdit = (invoice) => {
    setEditing(invoice.id);
    setForm(invoice);
    setShowModal(true);
  };

  const saveInvoice = () => {
    if (
      !form.id ||
      !form.patient ||
      !form.department ||
      !form.amount ||
      !form.date
    ) {
      alert('Please fill all fields');
      return;
    }

    if (editing) {
      setInvoices(
        invoices.map((i) =>
          i.id === editing ? form : i
        )
      );
    } else {
      setInvoices([...invoices, form]);
    }

    setShowModal(false);
  };

  const markAsPaid = (id) => {
    setInvoices(
      invoices.map((i) =>
        i.id === id ? { ...i, status: 'Paid' } : i
      )
    );
  };

  const deleteInvoice = (id) => {
    if (window.confirm('Delete this invoice?')) {
      setInvoices(invoices.filter((i) => i.id !== id));
    }
  };

  const filtered = invoices.filter(
    (invoice) =>
      invoice.patient
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      invoice.id.toLowerCase().includes(search.toLowerCase())
  );

  const totalInvoices = invoices.length;
  const paidInvoices = invoices.filter(
    (i) => i.status === 'Paid'
  ).length;
  const pendingInvoices = invoices.filter(
    (i) => i.status === 'Pending'
  ).length;
  const revenue = invoices
    .filter((i) => i.status === 'Paid')
    .reduce((sum, i) => sum + Number(i.amount), 0);

  return (
    <div className='billing-page'>
      <div className='page-header'>
        <div>
          <p className='eyebrow'>
            Hospital Finance
          </p>
          <h1>Billing & Invoices</h1>
        </div>

        <button className='add-btn' onClick={openAdd}>
          + Create Invoice
        </button>
      </div>

      <div className='toolbar'>
        <div className='search-box'>
          <Search size={18} />
          <input
            type='text'
            placeholder='Search invoices...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className='summary-grid'>
        <div className='summary-card'>
          <h3>{totalInvoices}</h3>
          <p>Total Invoices</p>
        </div>

        <div className='summary-card'>
          <h3>{paidInvoices}</h3>
          <p>Paid</p>
        </div>

        <div className='summary-card'>
          <h3>{pendingInvoices}</h3>
          <p>Pending</p>
        </div>

        <div className='summary-card'>
          <h3>₹{revenue.toLocaleString()}</h3>
          <p>Revenue</p>
        </div>
      </div>

      <div className='billing-table'>
        <div className='table-header'>
          <h2>Recent Invoices</h2>
          <button className='view-all-btn'>
            View All
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Patient</th>
              <th>Department</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.patient}</td>
                <td>{invoice.department}</td>
                <td>
                  ₹
                  {Number(invoice.amount).toLocaleString()}
                </td>
                <td>{invoice.date}</td>
                <td>
                  <span
                    className={`status ${invoice.status.toLowerCase()}`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className='actions'>
                  <button className='view-btn'>
                    View
                  </button>

                  <button
                    className='edit-btn'
                    onClick={() => openEdit(invoice)}
                  >
                    Edit
                  </button>

                  {invoice.status === 'Pending' && (
                    <button
                      className='pay-btn'
                      onClick={() =>
                        markAsPaid(invoice.id)
                      }
                    >
                      Mark Paid
                    </button>
                  )}

                  <button
                    className='delete-btn'
                    onClick={() =>
                      deleteInvoice(invoice.id)
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
                ? 'Edit Invoice'
                : 'Create Invoice'}
            </h2>

            <input
              placeholder='Invoice ID'
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
              type='number'
              placeholder='Amount'
              value={form.amount}
              onChange={(e) =>
                setForm({
                  ...form,
                  amount: e.target.value
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
              <option>Paid</option>
            </select>

            <div className='modal-actions'>
              <button onClick={saveInvoice}>
                {editing
                  ? 'Update Invoice'
                  : 'Save Invoice'}
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

export default BillingInvoices;

