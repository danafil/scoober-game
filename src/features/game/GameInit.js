import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import GameSummary from './GameSummary';
import styles from './GameInit.module.css';

const GameInit = ({ selfId, winner, initGame, isConnected }) => {
  return (
    <div className={styles.gameInit}>
      {!!winner && <GameSummary selfId={selfId} winner={winner} />}
      <div className={styles.gameInitButtons}>
        {!isConnected && <p>Connecting...</p>}
        <Button
          appearence="wide"
          onClick={() => initGame(true)}
          disable={!isConnected}
          text="New Single Game"
        />
        <Button
          appearence="wide"
          onClick={() => initGame(false)}
          disable={!isConnected}
          text="New Multiplayer Game"
        />
      </div>
    </div>
  );
};

GameInit.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  initGame: PropTypes.func.isRequired,
};

export default GameInit;
