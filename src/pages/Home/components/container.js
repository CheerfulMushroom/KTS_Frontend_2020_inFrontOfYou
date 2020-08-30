import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LeftBar from './leftBar';
import Content from './content';


const useStyles = makeStyles((theme) => ({
    menu: {

    },
    content: {

    },

    container: {
        marginTop: '80px',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3} className={classes.container}>
            <Grid item xs={3} className={classes.menu}>
                <LeftBar />
            </Grid>
            <Grid item xs={9} className={classes.content}>
                <Content />
            </Grid>
        </Grid>
        </div>
    );
}