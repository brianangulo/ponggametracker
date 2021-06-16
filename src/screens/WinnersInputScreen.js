import React from "react";
import PlayerTrackerComponent from "../components/PlayerTrackerComponent";
import ScoreTracker from "../components/WinnerTrackerComponent";

function WinnersInputScreen() {
  return (
    <>
      <PlayerTrackerComponent />
      <ScoreTracker />
    </>
  );
}

export default WinnersInputScreen;
