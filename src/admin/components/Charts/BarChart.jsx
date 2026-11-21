import React, { useEffect, useRef } from 'react';

function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const Chart = window.Chart;
    if (!Chart || !chartRef.current) return undefined;

    const instance = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Patients',
          data: [420, 500, 560, 610, 720, 780],
          backgroundColor: ['#0B5ED7', '#2d7ff8', '#5a9ef8', '#0B5ED7', '#2d7ff8', '#5a9ef8'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(7, 27, 82, 0.08)' } },
          x: { grid: { display: false } }
        }
      }
    });

    return () => instance.destroy();
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default BarChart;
