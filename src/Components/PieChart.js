import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
  const { labels, dataset } = props;
  const data = {
    labels: labels,
    datasets: dataset,
  };
  return (
    <div style={{ width: 400, height: 400 }}>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;
