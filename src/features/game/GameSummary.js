import React from 'react';
import GameInit from './GameInit';

const GameSummary = ({ initGame, winner, selfId, isConnected }) => {
  const summary = winner === selfId ? 'You won' : 'You lost';

  return (
    <>
      <p>{summary}</p>
      <GameInit initGame={initGame} isConnected={isConnected} />
    </>
  );
};

export default GameSummary;
