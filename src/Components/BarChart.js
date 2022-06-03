import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PieChart = (props) => {
  //   const options = {
  //     responsive: true,
  //   };
  const { labels, dataset } = props;
  const data = {
    labels: labels,
    datasets: dataset,
  };
  return (
    <div style={{ width: 400, height: 400 }}>
      <Bar data={data} />
    </div>
  );
};
export default PieChart;
