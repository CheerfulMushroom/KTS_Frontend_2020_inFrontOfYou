import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Choose from "./choseBlock";

const useStyles = makeStyles((theme) => ({
    choosing: {
        display: "flex",
        justifyContent: "space-between"
    },
}));

export default function BlockCompare() {
    const classes = useStyles();
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>Сравнение</Typography>
            </CardContent>
            <CardContent className={classes.choosing}>
                <Choose />
            </CardContent>
        </Card>
    );
}
