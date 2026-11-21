import React, { useEffect, useRef } from 'react';
import './Patient.css';

const stats = [
  { title: 'Blood Group', value: 'O +ve', growth: 'Certified' },
  { title: 'Active Prescriptions', value: '2', growth: 'Take on time' },
  { title: 'Upcoming Visit', value: 'Aug 3, 10 AM', growth: 'Dr. Deekshitha' },
  { title: 'Health Records', value: '8 Files', growth: 'Fully Encrypted' },
  { title: 'Insurance Status', value: 'Active', growth: 'Star Health Policy' },
  { title: 'Outstanding Balance', value: '₹0.00', growth: 'All bills paid' }
];

function Dashboard() {
  const heartRateChartRef = useRef(null);
  const bloodPressureChartRef = useRef(null);
  const activityChartRef = useRef(null);

  const heartRateChartInstance = useRef(null);
  const bloodPressureChartInstance = useRef(null);
  const activityChartInstance = useRef(null);

  useEffect(() => {
    const Chart = window.Chart;

    if (!Chart || !heartRateChartRef.current || !bloodPressureChartRef.current || !activityChartRef.current) {
      return undefined;
    }

    heartRateChartInstance.current?.destroy();
    bloodPressureChartInstance.current?.destroy();
    activityChartInstance.current?.destroy();

    heartRateChartInstance.current = new Chart(heartRateChartRef.current, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Heart Rate (BPM)',
            data: [72, 75, 68, 80, 74, 70, 71],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: '#10B981'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { min: 50, max: 100, grid: { color: 'rgba(16, 185, 129, 0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    bloodPressureChartInstance.current = new Chart(bloodPressureChartRef.current, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Systolic (mmHg)',
            data: [120, 118, 122, 119],
            borderColor: '#EF4444',
            backgroundColor: 'transparent',
            tension: 0.2,
            pointRadius: 4
          },
          {
            label: 'Diastolic (mmHg)',
            data: [80, 78, 82, 79],
            borderColor: '#3B82F6',
            backgroundColor: 'transparent',
            tension: 0.2,
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { family: 'Poppins', size: 11 } }
          }
        },
        scales: {
          y: { min: 60, max: 140, grid: { color: 'rgba(16, 185, 129, 0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    activityChartInstance.current = new Chart(activityChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Steps Walked',
            data: [6200, 7500, 8000, 5100, 6900, 10200, 8500],
            backgroundColor: '#10B981',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(16, 185, 129, 0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });

    return () => {
      heartRateChartInstance.current?.destroy();
      bloodPressureChartInstance.current?.destroy();
      activityChartInstance.current?.destroy();
    };
  }, []);

  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Personal Health Record</p>
          <h1>Patient Dashboard</h1>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary rounded-pill me-2" type="button">Download Health ID</button>
          <button className="btn btn-primary rounded-pill" type="button">Book Appointment</button>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((stat, index) => (
          <article className={`stat-card ${index % 2 === 0 ? 'accent' : ''}`} key={stat.title}>
            <div className="stat-card-top">
              <span>{stat.title}</span>
              <span className="trend info-text">{stat.growth}</span>
            </div>
            <h3>{stat.value}</h3>
          </article>
        ))}
      </section>

      <section className="charts-grid">
        <article className="panel panel-large">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Vital log</p>
              <h2>Heart Rate History</h2>
            </div>
            <span className="pill">Average 72 BPM</span>
          </div>
          <div className="chart-box">
            <canvas ref={heartRateChartRef}></canvas>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Blood Pressure Log</p>
              <h2>Systolic / Diastolic Trends</h2>
            </div>
          </div>
          <div className="chart-box">
            <canvas ref={bloodPressureChartRef}></canvas>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Fitness log</p>
              <h2>Daily Step Count</h2>
            </div>
          </div>
          <div className="chart-box chart-box-donut">
            <canvas ref={activityChartRef}></canvas>
          </div>
        </article>
      </section>
    </>
  );
}

export default Dashboard;
