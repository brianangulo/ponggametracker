import React from 'react';
import { Typography, Grid, makeStyles, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  hr: {
    height: 2,
    width: 400,
    margin: theme.spacing(1),
    backgroundColor: "#FFFFFF",
  },
}));

function ScoreTracker() {
    const classes = useStyles();
        return (
          <>
            <Grid className={classes.margin} container justify="center">
              <Grid item>
                  <Divider light className={classes.hr} />
                <Typography variant="h5">Current Winner: Tony Stark</Typography>
              </Grid>
            </Grid>
            <Grid className={classes.margin} container justify="center">
              <Grid item>
                <Typography variant="h5">Points Ahead: 4</Typography>
              </Grid>
            </Grid>
          </>
        );
}

export default ScoreTracker;    