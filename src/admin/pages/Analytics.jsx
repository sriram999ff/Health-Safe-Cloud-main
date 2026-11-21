import React from 'react';
import LineChart from '../components/Charts/LineChart';
import BarChart from '../components/Charts/BarChart';
import DoughnutChart from '../components/Charts/DoughnutChart';

function Analytics() {
  return (
    <>
      <section className="page-header">
        <div>
          <p className="eyebrow">Performance insights</p>
          <h1>Analytics</h1>
        </div>
      </section>

      <section className="charts-grid">
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Growth</p>
              <h2>Hospital Growth</h2>
            </div>
          </div>
          <div className="chart-box">
            <LineChart />
          </div>
        </article>
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Growth</p>
              <h2>Doctor Growth</h2>
            </div>
          </div>
          <div className="chart-box">
            <BarChart />
          </div>
        </article>
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Growth</p>
              <h2>Patient Growth</h2>
            </div>
          </div>
          <div className="chart-box">
            <BarChart />
          </div>
        </article>
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Scheduling</p>
              <h2>Appointments</h2>
            </div>
          </div>
          <div className="chart-box">
            <LineChart />
          </div>
        </article>
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Distribution</p>
              <h2>Disease Statistics</h2>
            </div>
          </div>
          <div className="chart-box chart-box-donut">
            <DoughnutChart />
          </div>
        </article>
      </section>
    </>
  );
}

export default Analytics;
