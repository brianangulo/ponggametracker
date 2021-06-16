import React from 'react';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function SaveGameButton() {
    const classes = useStyles();
    return (
        <Button className={classes.margin} variant="contained" onClick={() => console.log("save game clicked")}>Save Game</Button>
    );
}

export default SaveGameButton;