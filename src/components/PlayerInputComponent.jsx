import React from "react";
import {
  TextField,
  Typography,
  Button,
  makeStyles,
  createMuiTheme,
  colors,
  ThemeProvider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: colors.cyan,
  },
});

function PlayerInputComponent() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography className={classes.margin} variant="h3">
          Game Tracker
        </Typography>
        <Typography className={classes.margin} variant="h4">
          Player 1
        </Typography>
        <TextField
          className={classes.margin}
          label="Player 1"
          variant="outlined"
        />
        <Typography className={classes.margin} variant="h4">
          Player 2
        </Typography>
        <TextField
          className={classes.margin}
          label="Player 2"
          variant="outlined"
        />
        <Button
          className={classes.margin}
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
          onClick={() => console.log("continue pressed")}
        >
          Continue
        </Button>
      </ThemeProvider>
    </>
  );
}

export default PlayerInputComponent;
