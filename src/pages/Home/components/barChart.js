import {ChartComponent} from 'bar-chart-simple'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';



let data = [{
    "data_category": "USA",
    "data_value": 2025
}, {
    "data_category": "China",
    "data_value": 1882
}];

const useStyles = makeStyles((theme) => ({
    container: {
        width: '50%',
    },
}));

export default function barChart() {
    // const classes = useStyles();
    return (
        <ChartComponent data={data} chart_type="bar_chart"/>
    );
}