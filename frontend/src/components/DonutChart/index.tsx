import axios from "axios";
import ReactApexChart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
};
function DonutChart() {
  let chartData: ChartData = { labels: [], series: [] };
  //   const mockData = {
  //     series: [477138, 499928, 444867, 220426, 473088],
  //     labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  //   };

  axios.get(`${BASE_URL}/sales/amount-by-seller`).then((res) => {
    const data = res.data as SaleSum[];
    const myLabels = data.map((label) => label.sellerName);
    const mySeries = data.map((serie) => serie.sum);
    chartData = { labels: myLabels, series: mySeries };
    console.log(res.data);
  });
  const options = {
    legend: {
      show: true,
    },
  };
  return (
    <ReactApexChart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;
