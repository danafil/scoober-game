import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeApiConnect, selectApi } from './api/apiSlice';
import {
  subscribeGameStart,
  selectGame,
  selectGameInProgress,
  selectSelfTurn,
  initGameStart,
  sendAttempt,
} from './features/game/gameSlice';
import Game from './features/game/Game';
import GameInit from './features/game/GameInit';
import GameSummary from './features/game/GameSummary';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { id, selfId, isStarted, value, winner, attempts } = useSelector(
    selectGame
  );
  const { isConnected } = useSelector(selectApi);
  const gameInProgress = useSelector(selectGameInProgress);
  const selfTurn = useSelector(selectSelfTurn);

  useEffect(() => {
    dispatch(subscribeApiConnect());
    dispatch(subscribeGameStart());
  }, [dispatch]);

  // TODO handle mutliplayer game
  const handleInitGame = (isSingleUser) =>
    dispatch(initGameStart({ user: { id: selfId }, isSingleUser }));

  //TODO how do we test this?
  const handleAttempt = (number) => {
    if (selfTurn) {
      dispatch(
        sendAttempt({
          gameId: id,
          user: { id: selfId },
          number,
        })
      );
    }
  };

  return (
    <div className="App">
      {!isStarted && (
        //TODO Rename to GameOptions
        <GameInit initGame={handleInitGame} isConnected={isConnected} />
      )}
      {gameInProgress && (
        <Game
          handleAttempt={handleAttempt}
          value={value}
          attempts={attempts}
          selfTurn={selfTurn}
        />
      )}
      {!!winner && (
        <GameSummary
          selfId={selfId}
          winner={winner}
          initGame={handleInitGame}
          isConnected={isConnected}
        />
      )}
    </div>
  );
};

export default App;
