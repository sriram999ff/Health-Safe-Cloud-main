import React from 'react';
import { Link } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import NotificationPanel from '../components/NotificationPanel';
import LineChart from '../components/Charts/LineChart';
import BarChart from '../components/Charts/BarChart';
import DoughnutChart from '../components/Charts/DoughnutChart';
import { statsData, activitiesData } from '../services/api';

const quickActions = [
  { title: 'Add Hospital', icon: 'bi-hospital', path: '/admin/hospitals' },
  { title: 'Approve Hospital', icon: 'bi-file-earmark-check', path: '/admin/requests' },
  { title: 'Generate Report', icon: 'bi-journal-richtext', path: '/admin/reports' },
  { title: 'View Analytics', icon: 'bi-bar-chart-line', path: '/admin/analytics' },
  { title: 'Manage Users', icon: 'bi-people', path: '/admin/patients' }
];

const upcomingTasks = [
  'Review pending hospital registration',
  'Approve new doctor onboarding',
  'Publish weekly analytics summary'
];

function Dashboard() {
  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Operations overview</p>
          <h1>Dashboard</h1>
        </div>
        <Link className="btn btn-primary rounded-pill" to="/admin/reports">+ New Report</Link>
      </section>

      <section className="stats-grid">
        {statsData.map((stat, index) => (
          <StatsCard key={stat.title} stat={stat} index={index} />
        ))}
      </section>

      <section className="charts-grid">
        <article className="panel panel-large">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Growth rate</p>
              <h2>Hospital Growth</h2>
            </div>
            <span className="pill">+24% this quarter</span>
          </div>
          <div className="chart-box">
            <LineChart />
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Admissions</p>
              <h2>Patient Registration</h2>
            </div>
          </div>
          <div className="chart-box">
            <BarChart />
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Distribution</p>
              <h2>Analytics</h2>
            </div>
          </div>
          <div className="chart-box chart-box-donut">
            <DoughnutChart />
          </div>
        </article>
      </section>

      <section className="charts-grid" style={{ marginTop: '16px' }}>
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Timeline</p>
              <h2>Recent Activities</h2>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', color: '#74809a' }}>
                  <th style={{ padding: '10px 8px' }}>Time</th>
                  <th style={{ padding: '10px 8px' }}>Activity</th>
                  <th style={{ padding: '10px 8px' }}>Performed By</th>
                  <th style={{ padding: '10px 8px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {activitiesData.map((item) => (
                  <tr key={item.time} style={{ borderTop: '1px solid #eef3ff' }}>
                    <td style={{ padding: '10px 8px' }}>{item.time}</td>
                    <td style={{ padding: '10px 8px' }}>{item.activity}</td>
                    <td style={{ padding: '10px 8px' }}>{item.performedBy}</td>
                    <td style={{ padding: '10px 8px' }}><span className="pill">{item.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <NotificationPanel />
      </section>

      <section className="charts-grid" style={{ marginTop: '16px' }}>
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Operations</p>
              <h2>Recent Hospital Requests</h2>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="notification-item">
              <div>
                <strong>Sunrise Hospital</strong>
                <p>New registration request submitted</p>
              </div>
              <span className="pill">Pending</span>
            </div>
            <div className="notification-item">
              <div>
                <strong>Care Plus</strong>
                <p>License verification in progress</p>
              </div>
              <span className="pill">Review</span>
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Shortcuts</p>
              <h2>Quick Actions</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            {quickActions.map((item) => (
              <Link key={item.title} className="nav-link" to={item.path} style={{ background: '#f7faff', color: '#0b5ed7', padding: '12px 14px' }}>
                <i className={`bi ${item.icon}`}></i>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Planning</p>
              <h2>Upcoming Tasks</h2>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {upcomingTasks.map((task) => (
              <div key={task} className="notification-item">
                <div>
                  <strong>{task}</strong>
                  <p>Assigned to operations team</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default Dashboard;
