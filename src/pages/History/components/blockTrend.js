import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chart from "../../Home/components/chart";

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
