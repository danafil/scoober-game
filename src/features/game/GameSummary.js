import Button from '../../components/Button';

const GameSummary = ({ initGame, winner, player }) => {
  const summary = winner === player.id ?
  "You won" : "You lost"


  return (
    <>
      <p>{summary}</p>
      <Button
        appearence="wide"
        onClick={initGame}
        text="New Game"
      />
    </>
  )
}

export default GameSummary;
