import React from "react";
import PlayerScreen from "./screens/PlayerScreen";
import WinnersInputScreen from "./screens/WinnersInputScreen";
import {
  Container,
} from "@material-ui/core";
import "./App.css";
import "@fontsource/roboto";

function App() {
  return (
    <Container maxWidth="md">
      <div className="App App-header">
        {/* <PlayerScreen /> */}
        <WinnersInputScreen />
      </div>
    </Container>
  );
}

export default App;
