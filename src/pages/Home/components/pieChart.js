import { PieChart } from 'react-minimal-pie-chart';
import React from "react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '300px',
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    return (
            <PieChart className={classes.container}
                data={[
                        { title: 'One', value: 33, color: '#E38627' },
                        { title: 'Two', value: 33, color: '#C13C37' },
                        { title: 'Three', value: 33, color: '#6A2135' },
                    ]}
            />
    );
}