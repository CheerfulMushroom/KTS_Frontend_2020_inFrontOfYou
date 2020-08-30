import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: '30px',
        height: '200px',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <p>Блок</p>
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
            <Paper className={classes.paper}>
                <p>Блок</p>
            </Paper>
        </div>
    );
}