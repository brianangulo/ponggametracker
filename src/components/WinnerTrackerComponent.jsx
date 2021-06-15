import React from 'react';
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0.2),
    },
}));

function ScoreTracker() {
    const classes = useStyles();
        return (
            <Grid className={classes.margin} container>
                <Grid item>
                    <Typography>
                        Score: 
                    </Typography>
                </Grid>
            </Grid>
        );
}

export default ScoreTracker;    