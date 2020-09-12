import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function Today() {
    return (
        <Grid container spacing={3}>
            <Grid item xs>
                <Paper variant="outlined" square>
                    <Typography>Заражения</Typography>
                    <Typography>999 999</Typography>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper variant="outlined" square>
                    <Typography>Выздоровления</Typography>
                    <Typography>666 666</Typography>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper variant="outlined" square>
                    <Typography>Смерти</Typography>
                    <Typography>000 000</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}
