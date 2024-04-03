import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-chart-box-and-violin-plot';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: data.label,
            data: data.values,
            borderColor: 'rgba(0, 0, 0, 0)', // Set border color to transparent
            backgroundColor: data.backgroundColor || '#4F62CD50',
            hoverBackgroundColor: data.hoverBackgroundColor || '#4F62CD', // Set hover color
            borderRadius: 10,
            borderSkipped: 'top,bottom',
            borderWidth: 0, // Set bar color
          }],
        },
        options: {
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false, // Hide x-axis grid lines
              }, // Show x-axis
            },
            y: {
              display: false,
              grid: {
                display: false, // Hide y-axis grid lines
              }, // Hide y-axis
            },
          },
          elements: {
            bar: {
              borderWidth: 0,
              borderRadius: 20, // Set border radius to curve bars
            },
          },
        },
      });
    }

    return () => {

      if (chartInstance) {
        <h2>Overview</h2>
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <div className='barchart'>
  <h2>Overview</h2>
  <p>Montholy Earning</p>
  <canvas ref={chartRef} />
  </div>
};

export default BarChart;
