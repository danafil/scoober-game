import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const GameInit = ({ initGame, isConnected }) => {
  return (
    <>
      { !isConnected && <p>Connecting...</p> }
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
    </>
  )
}

GameInit.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  initGame: PropTypes.func.isRequired,
}

export default GameInit;
