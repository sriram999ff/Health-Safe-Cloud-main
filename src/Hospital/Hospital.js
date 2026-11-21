import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import './Hospital.css';
import Appointments from '../Patient/Appointments.jsx';
import WardManagement from './WardManagement.js';
import LabReport from './LabReports.js';
import Billing from './BillingInvoices.js';
import Settings from './Settings.js';
import Doctor from './DoctorDirectory.js';
import PatientRecord from './PatientRecords.js';




const navItems = [
  { name: 'Dashboard', icon: 'bi-grid-1x2-fill', active: true },
  { name: 'Doctor Directory', icon: 'bi-person-badge' },
  { name: 'Patient Records', icon: 'bi-folder2-open' },
  { name: 'Appointments', icon: 'bi-calendar3' },
  { name: 'Ward Management', icon: 'bi-building-gear' },
  { name: 'Lab Reports', icon: 'bi-clipboard2-pulse' },
  { name: 'Billing & Invoices', icon: 'bi-receipt' },
  { name: 'Settings', icon: 'bi-sliders' },
  { name: 'Logout', icon: 'bi-box-arrow-right' }
];

const stats = [
  { title: 'Active Doctors', value: '42', growth: 'On Duty' },
  { title: 'Admitted Patients', value: '184', growth: '+5.4% this week' },
  { title: 'Available Beds', value: '28 / 150', growth: '81% Occupancy' },
  { title: 'Appointments Today', value: '68', growth: '12 Pending' },
  { title: 'Pending Lab Reports', value: '15', growth: 'Critical Priority' },
  { title: 'Emergency Admissions', value: '4', growth: 'Active Now', alert: true }
];

function Hospital() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const admissionsChartRef = useRef(null);
  const departmentChartRef = useRef(null);
  const patientTypeChartRef = useRef(null);

  const admissionsChartInstance = useRef(null);
  const departmentChartInstance = useRef(null);
  const patientTypeChartInstance = useRef(null);

  const handleNavClick = (itemName) => {
    if (itemName === 'Doctor Directory') {
      navigate('/hospital/doctor-directory');
    } else if (itemName === 'Patient Records') {
      navigate('/hospital/patient-records');
    } else if (itemName === 'Ward Management') {
      navigate('/hospital/ward-management');
    } else if (itemName === 'Appointments') {
      navigate('/hospital/appointments');
    } else if (itemName === 'Lab Reports') {
      navigate('/hospital/lab-reports');
    } else if (itemName === 'Billing & Invoices') {
      navigate('/hospital/billing-invoices');
    } else if (itemName === 'Settings') {
      navigate('/hospital/settings');
    } else if (itemName === 'Logout') {
      navigate('/login');
    }
  };
  useEffect(() => {
    const Chart = window.Chart;

    if (!Chart || !admissionsChartRef.current || !departmentChartRef.current || !patientTypeChartRef.current) {
      return undefined;
    }

    admissionsChartInstance.current?.destroy();
    departmentChartInstance.current?.destroy();
    patientTypeChartInstance.current?.destroy();

    // Chart 1: Admissions trend
    admissionsChartInstance.current = new Chart(admissionsChartRef.current, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Outpatients',
            data: [35, 48, 42, 60, 55, 30, 22],
            borderColor: '#0D9488',
            backgroundColor: 'rgba(13, 148, 136, 0.1)',
            fill: true,
            tension: 0.35,
            pointRadius: 3
          },
          {
            label: 'Inpatients',
            data: [12, 18, 15, 22, 19, 14, 8],
            borderColor: '#0284C7',
            backgroundColor: 'rgba(2, 132, 199, 0.1)',
            fill: true,
            tension: 0.35,
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { boxWidth: 12, font: { family: 'Poppins', size: 11 } }
          }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(13, 148, 136, 0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    // Chart 2: Ward Occupancy
    departmentChartInstance.current = new Chart(departmentChartRef.current, {
      type: 'bar',
      data: {
        labels: ['ICU', 'Pediatrics', 'Cardiology', 'General', 'Maternity', 'Orthopedic'],
        datasets: [
          {
            label: 'Occupied Beds',
            data: [18, 22, 15, 45, 14, 12],
            backgroundColor: '#0D9488',
            borderRadius: 6
          },
          {
            label: 'Total Beds',
            data: [20, 25, 20, 50, 15, 20],
            backgroundColor: '#E2E8F0',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(13, 148, 136, 0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    // Chart 3: Patient Demographics
    patientTypeChartInstance.current = new Chart(patientTypeChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['General Insurance', 'Self-Pay', 'Government Scheme', 'Corporate Co-Pay'],
        datasets: [
          {
            data: [50, 20, 20, 10],
            backgroundColor: ['#0D9488', '#0F766E', '#14B8A6', '#2DD4BF'],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { boxWidth: 10, font: { family: 'Poppins', size: 10 } }
          }
        }
      }
    });

    return () => {
      admissionsChartInstance.current?.destroy();
      departmentChartInstance.current?.destroy();
      patientTypeChartInstance.current?.destroy();
    };
  }, []);

  const isDashboard = location.pathname === '/hospital' || location.pathname === '/hospital/';

  return (
    <div className="hospital-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="brand-box">
            <div className="brand-icon">
              <i className="bi bi-heart-pulse-fill"></i>
            </div>
            <div>
              <h3>HealthSafe Cloud</h3>
              <p>Hospital Console</p>
            </div>
          </div>
          <button className="sidebar-close" type="button" onClick={() => setSidebarOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              type="button"
              className={`nav-link-btn ${item.active ? 'active' : ''}`}
              key={item.name}
              onClick={() => handleNavClick(item.name)}
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="footer-card">
            <p>Facility Operations</p>
            <strong>City Care Hospital</strong>
          </div>
        </div>
      </aside>

      <main className="content-area">
        {isDashboard ? (
          <>
            <header className="topbar">
              <div className="topbar-left">
                <button className="sidebar-toggle" type="button" onClick={() => setSidebarOpen(true)}>
                  <i className="bi bi-list"></i>
                </button>
                <label className="search-box">
                  <i className="bi bi-search"></i>
                  <input type="text" placeholder="Search patient files, doctors..." />
                </label>
              </div>

              <div className="topbar-right">
                <button className="icon-button" type="button" aria-label="Notifications">
                  <i className="bi bi-bell"></i>
                  <span className="badge">4</span>
                </button>
                <button className="icon-button" type="button" aria-label="Messages">
                  <i className="bi bi-chat-left-dots"></i>
                  <span className="badge">2</span>
                </button>
                <div className="profile-card">
                  <div className="avatar">CH</div>
                  <div>
                    <strong>City Care Admin</strong>
                    <p>Hospital Staff</p>
                  </div>
                </div>
              </div>
            </header>

            <section className="page-header">
              <div>
                <p className="eyebrow">Facility dashboard</p>
                <h1>Hospital Dashboard</h1>
              </div>
              <div className="header-actions">
                <button className="btn btn-secondary rounded-pill me-2" type="button">Print Status</button>
                <button className="btn btn-primary rounded-pill" type="button">+ Admit Patient</button>
              </div>
            </section>

            <section className="stats-grid">
              {stats.map((stat, index) => (
                <article className={`stat-card ${stat.alert ? 'alert' : ''} ${index % 2 === 0 ? 'accent' : ''}`} key={stat.title}>
                  <div className="stat-card-top">
                    <span>{stat.title}</span>
                    <span className={`trend ${stat.alert ? 'alert-text' : 'info-text'}`}>{stat.growth}</span>
                  </div>
                  <h3>{stat.value}</h3>
                </article>
              ))}
            </section>

            <section className="charts-grid">
              <article className="panel panel-large">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">Weekly overview</p>
                    <h2>Patient Admissions</h2>
                  </div>
                </div>
                <div className="chart-box">
                  <canvas ref={admissionsChartRef}></canvas>
                </div>
              </article>

              <article className="panel">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">Beds overview</p>
                    <h2>Bed Occupancy by Ward</h2>
                  </div>
                </div>
                <div className="chart-box">
                  <canvas ref={departmentChartRef}></canvas>
                </div>
              </article>

              <article className="panel">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">Financial summary</p>
                    <h2>Insurance & Billing Distribution</h2>
                  </div>
                </div>
                <div className="chart-box chart-box-donut">
                  <canvas ref={patientTypeChartRef}></canvas>
                </div>
              </article>
            </section>
          </>
        ) : (
          <Routes>
            <Route path="appointments" element={<Appointments />} />
            <Route path="ward-management" element={<WardManagement />} />
            <Route path="lab-reports" element={<LabReport />} />
            <Route path="billing-invoices" element={<Billing />} />
            <Route path="settings" element={<Settings />} />
            <Route path="doctor-directory" element={<Doctor />} />
            <Route path="patient-records" element={<PatientRecord />} />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default Hospital;
