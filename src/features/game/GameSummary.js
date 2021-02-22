import React from 'react';
import styles from './GameSummary.module.css';

const GameSummary = ({ winner, selfId }) => {
  const summary = winner === selfId ? 'You won' : 'You lost';
  const clazz = winner === selfId ? 'win' : 'lost';

  return (
    <div className={styles.summaryWrapper} data-testid="summary-component">
      <div className={`${styles.summary} ${styles[clazz]}`} />
      <h1 className={styles.message}>{summary}</h1>
    </div>
  );
};

export default GameSummary;
