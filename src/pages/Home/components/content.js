import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Search from './search';
import MapChart from './mapChart';

import ReactTooltip from "react-tooltip";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '30px',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [content, setContent] = useState("");
    return (
        <div>
            <Search />
            <Paper className={classes.paper}>
                <MapChart />
                <ReactTooltip>{content}</ReactTooltip>
            </Paper>
            <Paper className={classes.paper}>
                <p>Блок</p>
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