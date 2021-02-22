import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeApiConnect, selectApi } from './api/apiSlice';
import {
  subscribeGameStart,
  selectGame,
  selectGameInProgress,
  selectCanSubmit,
  initGameStart,
  sendAttempt,
} from './features/game/gameSlice';
import Game from './features/game/Game';
import GameInit from './features/game/GameInit';
import Header from './components/Header';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { id, selfId, startingNumber, winner, attempts, selfImg } = useSelector(
    selectGame
  );
  const { isConnected } = useSelector(selectApi);
  const gameInProgress = useSelector(selectGameInProgress);
  const canSubmit = useSelector(selectCanSubmit);

  useEffect(() => {
    dispatch(subscribeApiConnect());
    dispatch(subscribeGameStart());
  }, [dispatch]);

  const handleInitGame = (isSingleUser) =>
    dispatch(initGameStart({ user: { id: selfId }, isSingleUser }));

  //TODO how do we test this?
  const handleAttempt = (number) => {
    if (canSubmit) {
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
      <Header sticky={gameInProgress} profileImg={selfImg} />
      {gameInProgress && (
        <Game
          handleAttempt={handleAttempt}
          startingNumber={startingNumber}
          attempts={attempts}
          canSubmit={canSubmit}
        />
      )}
      {!gameInProgress && (
          <GameInit 
            initGame={handleInitGame} 
            isConnected={isConnected}
            selfId={selfId}
            winner={winner} 
          />
        )}
    </div>
  );
};

export default App;
