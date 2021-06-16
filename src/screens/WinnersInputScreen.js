import React from "react";
import PlayerTrackerComponent from "../components/PlayerTrackerComponent";
import ScoreTracker from "../components/WinnerTrackerComponent";
import SaveGameButton from "../components/SaveGameButtonComp";

function WinnersInputScreen() {
  return (
    <>
      <PlayerTrackerComponent />
      <ScoreTracker />
      <SaveGameButton />
    </>
  );
}

export default WinnersInputScreen;
