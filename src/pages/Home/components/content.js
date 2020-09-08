import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import {getCountryStatistics} from "utils/apiService";
import Chart from "./chart";
import MapChart from "./mapChart";
import PieChart from "./pieChart";
import Search from "./search";
import Threats from "./threats";
import Today from "./today";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: "30px",
    },

    map: {
        margin: "0",
        padding: "0 1.5rem",
    },

}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [casesData, setCasesData] = useState([]);

    // TODO: where to put this logic
    useEffect(()=>{
        (async () => {
            const countriesRawData = await getCountryStatistics();
            const newCasesData = Object.values(countriesRawData)
                .map((countryRawData)=>{
                    return {
                        countryCode: countryRawData.code,
                        value: countryRawData.total_new_cases_today,
                    };
                });
            setCasesData(newCasesData);
        })();
    }, []);


    return (
        <div>
            <Search />
            <Paper className={classes.paper}>
                <MapChart countriesData={casesData} className={classes.map} />
            </Paper>

            <Paper className={classes.paper}>
                <Typography>Общая статистика</Typography>
                <PieChart />
                <Chart />
            </Paper>
            <Paper className={classes.paper}>
                <Typography>Сегодня</Typography>
                <Today />
            </Paper>
            <Paper className={classes.paper}>
                <Typography>Угрозы</Typography>
                <Threats />
            </Paper>
        </div>
    );
}
