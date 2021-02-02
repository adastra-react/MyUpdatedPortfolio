import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import './Chart.css'

const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const chartConfig = {
  type: "doughnut",
  data: {
    labels: ["Designer", "Coder", "Esport gamer", "Video editing", "3D modeling"],
    datasets: [
      {
        label: "# of Votes",
        data: [70, 90, 70, 90, 95],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(225, 106, 236, 0.2)",
          "rgba(90, 206, 9, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(225, 106, 236, 1)",
          "rgba(90, 206, 9, 1)",
        ],
        borderWidth: .5
      }
    ]
  },
  options: {
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true
    //       }
    //     }
    //   ]
    // }
    responsive: true,
    maintainAspectRatio: false,
  }
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

//   const onButtonClick = () => {
//     const data = [
//       randomInt(),
//       randomInt(),
//       randomInt()
//     ];
//     updateDataset(0, data);
//   };

  return (
    <div>
      <canvas className="chart-canvas" ref={chartContainer} />
    </div>
  );
};

export default Chart;
