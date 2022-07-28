// //below as per documentation
// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// //choosing type of chart
// import { Line } from 'react-chartjs-2';
// //this is a dev dependency to provide fake data to see if chart displaying
// import { faker } from '@faker-js/faker';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const top = 'top'

// const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: top,
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart',
//       },
//     },
//   };
  
//   const labels = bottomAxis;

//   const arr = [1, 2, 3, 4]
  
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: arr,
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       // {
//       //   label: 'Dataset 2',
//       //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       //   borderColor: 'rgb(53, 162, 235)',
//       //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       // },
//     ],
//   };
  
//   export function Chart(bottomAxis) {
//     return <Line options={options} data={data} />;
//   }
  