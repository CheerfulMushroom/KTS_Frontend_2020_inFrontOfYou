import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Search from './search';
import MapChart from './mapChart';
import PieChart from './pieChart';
import Chart from './chart';
import Today from './today';
import Threats from './threats';

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
                <Typography>Сегодня</Typography>
                <Today />
            </Paper>
            <Paper className={classes.paper}>
                <Typography>Угрозы</Typography>
                <Threats />
            </Paper>
        </div>
    );
}