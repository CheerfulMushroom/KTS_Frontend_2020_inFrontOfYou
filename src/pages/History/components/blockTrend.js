import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Chart from "pages/Home/components/chart";
import React from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: "80px",
    },
}));

export default function BlockTrend() {
    const classes = useStyles();
    return (
        <Card className={classes.paper} variant="outlined">
            <CardContent>
                <Typography>История распространения</Typography>
            </CardContent>
            <CardContent>
                <Chart />
            </CardContent>
        </Card>
    );
}
