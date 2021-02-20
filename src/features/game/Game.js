import { PropTypes } from 'prop-types';
import Button from '../../components/Button';

const Game = ({
  value,
  handleTurn,
}) => {
  return (
    <>
      <div>{value}</div>
      <div>
        <Button appearence="round" text="-1" onClick={() => handleTurn(-1)}/>
        <Button appearence="round" text="0" onClick={() => handleTurn(0)}/>
        <Button appearence="round" text="1" onClick={() => handleTurn(1)}/>
      </div>
    </>
  )
}

Game.propTypes = {
  value: PropTypes.number.isRequired,
  handleTurn: PropTypes.func.isRequired,
}

export default Game;
