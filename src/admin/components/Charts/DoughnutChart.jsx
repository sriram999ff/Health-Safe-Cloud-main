import React, { useEffect, useRef } from 'react';

function DoughnutChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const Chart = window.Chart;
    if (!Chart || !chartRef.current) return undefined;

    const instance = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Hospitals', 'Doctors', 'Patients', 'Records'],
        datasets: [{
          data: [30, 25, 30, 15],
          backgroundColor: ['#0B5ED7', '#3A6FF0', '#72A6F8', '#DDEBFF'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%'
      }
    });

    return () => instance.destroy();
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default DoughnutChart;
