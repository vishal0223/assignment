import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const CustomersPieChart = () => {
  // Data for the pie chart
  const data = {
    labels: ['Total New Customers', 'Other'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ['#4F62CD', '#F0F0F0'],
        borderWidth: 0,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '80%', // Adjust the size of the center hole
  };

  return (
    <div className="customers-pie-chart">
      <h2>Customers</h2>
      <p>Customers that buy products</p>
      <div className="pie-chart-container">
        <Doughnut data={data} options={options} />
        <div className="center-label">
          <span className="percentage">65%</span>
          <span>Total New Customers</span>
        </div>
      </div>
    </div>
  );
};

export default CustomersPieChart;
