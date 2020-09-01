import React from "react";
import { ChartComponent } from "bar-chart-simple";

let data = [
  {
    data_category: "USA",
    data_value: 2025,
  },
  {
    data_category: "China",
    data_value: 1882,
  },
  {
    data_category: "Russia",
    data_value: 3000,
  },
  {
    data_category: "France",
    data_value: 2500,
  },
];

export default function barChart() {
  return <ChartComponent data={data} chart_type="bar_chart" />;
}
