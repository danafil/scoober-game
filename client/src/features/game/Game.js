import React, { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../components/Button';
import Attempt from './Attempt';
import Label from '../../components/Label';
import styles from './Game.module.css';

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView({behavior: "smooth"}));
  return <div ref={elementRef} />;
};

const Game = ({ startingNumber, handleAttempt, attempts, canSubmit }) => {
  return (
    <>
      <div className={styles.game}>
        <div className={styles.startNumber}>
          <Label text={`${startingNumber}`} />
        </div>
        {attempts.map((attempt, index) => {
          return <Attempt {...attempt} key={index} />;
        })}
        <AlwaysScrollToBottom />
      </div>
      <div className={styles.actionButtons}>
        <h2 className={styles.info}>
          {canSubmit ? 'Your turn!' : 'Waiting oponent turn...'}
        </h2>
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
  startingNumber: PropTypes.number.isRequired,
  handleAttempt: PropTypes.func.isRequired,
  attempts: PropTypes.array,
};

export default Game;
