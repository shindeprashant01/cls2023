import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Dashboard.css'

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartDemo  = useRef(null);

  useEffect(() => {
    // Sample data for the chart
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Example Dataset',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    };

    // Configuration options for the chart
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Creating the chart
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: data,
      options: options,
    });

    const demoChart =new Chart( chartRef.current,{
        type: 'bar',
        data:data ,
        options : options,

    });


    const cleanupFunctions = [];

    cleanupFunctions.push(() => myChart.destroy());
    cleanupFunctions.push(() => demoChart.destroy());


    return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
 
  }, []);

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="chart-container">
        <canvas ref={chartRef} width="400" height="100"></canvas>
        {/* <canvas ref={chartDemo} width="400" height="100"></canvas> */}
      </div>
      {/* <div className="chart-container">
        <canvas ref={chartRef} width="400" height="400"></canvas>
      </div> */}
    </div>
  );
};

export default Dashboard;
