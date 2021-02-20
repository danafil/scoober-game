import PropTypes from 'prop-types';
import Button from '../../components/Button';

const GameInit = ({ initGame, isConnected }) => {
  return (
    <>
      { !isConnected && <p>Connecting...</p> }
      <Button
        appearence="wide" 
        onClick={initGame}
        disable={!isConnected}
        text="New Game"
      />
    </>
  )
}

GameInit.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  initGame: PropTypes.func.isRequired,
}

export default GameInit;
