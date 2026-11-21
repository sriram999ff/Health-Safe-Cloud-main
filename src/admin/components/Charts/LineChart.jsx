import React, { useEffect, useRef } from 'react';

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const Chart = window.Chart;
    if (!Chart || !chartRef.current) return undefined;

    const instance = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Hospitals',
          data: [18, 24, 28, 32, 38, 44],
          borderColor: '#0B5ED7',
          backgroundColor: 'rgba(11, 94, 215, 0.16)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6
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

export default LineChart;
