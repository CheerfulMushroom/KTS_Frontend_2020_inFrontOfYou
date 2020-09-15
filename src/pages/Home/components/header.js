import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Info from "./info";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    Typography: {
        flex: 1,
    },

    title: {
        textAlign: "center",
        textTransform: "uppercase",
    },

    link: {
        textDecoration: "none",
        color: "white"
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Grid item xs>
                    <NavLink className={classes.link} to="/">
                        <Typography>inFrontOfYou</Typography>
                    </NavLink>
                </Grid>
                <Grid item xs={8} className={classes.title}>
                    <Typography>Статистика пандемии коронавируса</Typography>
                </Grid>
                <Grid item xs>
                    <Info />
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
