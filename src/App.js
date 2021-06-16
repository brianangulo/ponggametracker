import React from "react";
import PlayerScreen from "./screens/PlayerScreen";
import WinnersInputScreen from "./screens/WinnersInputScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Container,
} from "@material-ui/core";
import "./App.css";
import "@fontsource/roboto";

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <div className="App App-header">
          <Switch>
            <Route path="/">
              <PlayerScreen />
            </Route>
            <Route path="/winning">
              <WinnersInputScreen />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
