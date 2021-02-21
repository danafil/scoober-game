import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../components/Button';
import Attempt from './Attempt';

const Game = ({ value, handleAttempt, attempts, selfTurn }) => {
  return (
    <>
      <div>{selfTurn ? 'Your turn' : 'Waiting oponent turn'}</div>
      <div>{value}</div>
      {attempts.map((attempt, index) => {
        return <Attempt {...attempt} key={index} />;
      })}
      <div>
        <Button
          appearence="round"
          text="-1"
          onClick={() => handleAttempt(-1)}
        />
        <Button appearence="round" text="0" onClick={() => handleAttempt(0)} />
        <Button appearence="round" text="1" onClick={() => handleAttempt(1)} />
      </div>
    </>
  );
};

Game.defaultProps = {
  attempts: [],
};

Game.propTypes = {
  value: PropTypes.number.isRequired,
  handleAttempt: PropTypes.func.isRequired,
  attempts: PropTypes.array,
};

export default Game;
