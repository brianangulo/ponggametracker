import React from 'react';
import { Container, Grid, TextField, Paper } from "@material-ui/core";

function PlayerScreen() {
    return (
      <Container maxWidth="md">
        <Grid item md>
          <h1>Player 1</h1>
        </Grid>
        <Grid item md>
          <TextField label="Player 1" variant="outlined" />
        </Grid>
        <Grid item md>
          <h1>Player 2</h1>
          <Paper color="black" />
        </Grid>
        <Grid item md>
          <TextField label="Player 2" variant="outlined" />
        </Grid>
      </Container>
    );
}

export default PlayerScreen;