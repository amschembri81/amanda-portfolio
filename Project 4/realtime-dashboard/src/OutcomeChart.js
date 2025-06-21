import { Bar } from "react-chartjs-2";
import useLiveData from "./useLiveData";

export default function OutcomeChart() {
  const data = useLiveData();

  const outcomes = data.reduce((acc, row) => {
    const key = row.Outcome || "Unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(outcomes),
    datasets: [
      {
        label: "Outcome Count",
        data: Object.values(outcomes),
        backgroundColor: "rgba(100, 149, 237, 0.6)",
        borderColor: "royalblue",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Purchase Outcomes",
      },
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
}
