import React from "react";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0.2),
    },
}));

function PlayerTrackerComponent() {
    const classes = useStyles();
  return (
    <>
      <Grid container className={classes.margin} spacing={10} justify="center">
        <Grid item>
          <Typography variant="h4">Tony Stark</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained">Add Win</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.margin} spacing={10} justify="center">
        <Grid item>
          <Typography>Wins</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">7</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.margin} spacing={10} justify="center">
        <Grid item>
          <Typography variant="h4">Captain America</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained">Add Win</Button>
        </Grid>
        <Grid container className={classes.margin} spacing={10} justify="center">
          <Grid item>
            <Typography>Wins</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">7</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PlayerTrackerComponent;
