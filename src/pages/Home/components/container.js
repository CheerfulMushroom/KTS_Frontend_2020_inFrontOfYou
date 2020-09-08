import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Content from "./content";
import LeftBar from "./leftBar";


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "80px",
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
