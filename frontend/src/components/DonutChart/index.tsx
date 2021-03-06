import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
};
function DonutChart() {

  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((res) => {
      const data = res.data as SaleSum[];
      const myLabels = data.map((label) => label.sellerName);
      const mySeries = data.map((serie) => serie.sum);
      setChartData({ labels: myLabels, series: mySeries });
    });
  }, [])

  
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
