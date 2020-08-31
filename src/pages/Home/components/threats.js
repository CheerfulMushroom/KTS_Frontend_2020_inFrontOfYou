import React from 'react'
import {ChartComponent} from 'bar-chart-simple'

let data = [{
    "data_category": "USA",
    "data_value": 2025
}, {
    "data_category": "China",
    "data_value": 1882
}];

export default function barChart() {
    return (
        <ChartComponent data={data} chart_type="bar_chart"/>
    );
}