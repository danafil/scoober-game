import React from 'react';
import styles from './Game.module.css';
import { useDispatch } from 'react-redux';
import { startGame } from './gameSlice';
import { WideButton } from '../buttons/WideButton';

export function Game(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.game}>
      <WideButton 
        startGame={() => dispatch(startGame())}
        text="New Game"
      />
    </div>
  );
}
