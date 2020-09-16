import {ChartComponent} from "bar-chart-simple";
import PropTypes from "prop-types";
import React from "react";

export default function BarChart(props) {

    BarChart.propTypes = {
        coutryData: PropTypes.object
    };

    const data = [
        {
            data_category: "Случаи",
            data_value: props.coutryData.total_cases,
        },
        {
            data_category: "Смерти",
            data_value: props.coutryData.total_deaths,
        },
        {
            data_category: "Случаи сегодня",
            data_value: props.coutryData.total_new_cases_today,
        },
        {
            data_category: "Смерти сегодня",
            data_value: props.coutryData.total_new_deaths_today,
        },
    ];

    console.log(data);

    return <ChartComponent key={data} data={data} chart_type="bar_chart" />;
}