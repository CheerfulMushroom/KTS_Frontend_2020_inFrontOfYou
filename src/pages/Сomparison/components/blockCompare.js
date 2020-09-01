import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Threats from "../../Home/components/threats";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: "80px",
  },
}));

export default function BlockCompare() {
  const classes = useStyles();
  return (
    <Card className={classes.paper} variant="outlined">
      <CardContent>
        <Typography>Сравнение</Typography>
      </CardContent>
      <CardContent>
        <Threats />
      </CardContent>
    </Card>
  );
}
