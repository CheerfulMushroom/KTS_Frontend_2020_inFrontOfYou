import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

import BarCharts from './barChart';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: '30px',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography>Угрозы</Typography>
            <BarCharts />
        </Paper>
);
}