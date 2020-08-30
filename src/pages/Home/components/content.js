import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Search from './search';
import MapChart from './mapChart';

import ReactTooltip from "react-tooltip";

import Typography from '@material-ui/core/Typography';

import PieChart from './pieChart';
import Chart from './chart';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: '30px',
    },

    map: {
        margin: '0',
        padding: '0 1.5rem',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [content, setContent] = useState("");
    return (
        <div>
            <Search />
            <Paper className={classes.paper}>
                <MapChart setTooltipContent={setContent} className={classes.map} />
                <ReactTooltip>{content}</ReactTooltip>
            </Paper>

            <Paper className={classes.paper}>
                <Typography>Общая статистика</Typography>
                <PieChart />
                <Chart />
            </Paper>
            <Paper className={classes.paper}>
                <p>Блок</p>
            </Paper>
            <Paper className={classes.paper}>
                <p>Блок</p>
            </Paper>
        </div>
    );
}