import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Header from "./components/header";
import LeftBar from "./components/leftBar";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "80px",
    },
}));


function PageBase(props) {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={3} className={classes.menu}>
                    <LeftBar/>
                </Grid>
                <Grid item xs={9} className={classes.content}>
                    {props?.children}
                </Grid>
            </Grid>
        </>
    )
}

PageBase.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageBase;