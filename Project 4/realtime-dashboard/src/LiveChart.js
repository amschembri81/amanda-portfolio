import { Line } from "react-chartjs-2";
import useLiveData from "./useLiveData";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  BarElement,       // ✅ Required for bar charts if used
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  BarElement,       // ✅ Register bar if ever needed
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function LiveChart() {
  const data = useLiveData();

  if (!data || data.length === 0) {
    return <p>Waiting for live data stream...</p>;
  }

  const labels = data.map((_, idx) => `#${data.length - idx}`);
  const prices = data.map((row) => parseFloat(row.Amount) || 0);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Amount (Live)",
        data: prices,
        borderColor: "aqua",
        backgroundColor: "rgba(0,255,255,0.2)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Live Purchase Amount Stream"
      },
    },
    scales: {
      x: {
        type: "category",
        title: { display: true, text: "Data Points" }
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Amount ($)" }
      }
    }
  };

  // ✅ This is the final return statement with the fix:
  return <Line key={JSON.stringify(chartData)} data={chartData} options={chartOptions} />;
}
