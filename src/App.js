import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribeApiConnect, selectApi } from "./api/apiSlice";
import {
  subscribeGameStart,
  selectGame,
  initGameStart,
  sendAttempt,
} from "./features/game/gameSlice";
import Game from "./features/game/Game";
import GameInit from "./features/game/GameInit";
import GameSummary from "./features/game/GameSummary";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const {
    id,
    isStarted,
    playerOne,
    playerTwo,
    turn,
    value,
    winner,
		attempts,
  } = useSelector(selectGame);
  const { isConnected } = useSelector(selectApi);

  useEffect(() => {
    dispatch(subscribeApiConnect());
    dispatch(subscribeGameStart());
    console.log("subscribeApiConnect is dispatched");
  }, [dispatch]);

  // TODO handle mutliplayer game
  const handleInitGame = (isSingleUser) =>
    dispatch(initGameStart({ user: playerOne, isSingleUser }));
  const handleAttempt = (number) => {
		dispatch(
      sendAttempt({
        gameId: id,
        user: turn === playerOne.id ? playerOne : playerTwo,
        number,
      })
    );
	}

  const gameInProgress = isStarted && !winner;

  return (
    <div className="App">
      {!isStarted && (
        <GameInit 
					initGame={handleInitGame}
					isConnected={isConnected}
				/>
      )}
      {gameInProgress && <Game handleAttempt={handleAttempt} value={value} attempts={attempts} />}
      {!!winner && (
        <GameSummary
          player={playerOne}
          winner={winner}
          initGame={handleInitGame}
        />
      )}
    </div>
  );
};

export default App;
