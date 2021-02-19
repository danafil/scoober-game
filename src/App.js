import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onApiConnect } from './app/apiSlice';
import { Game } from './features/game/Game';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onApiConnect())
    console.log("onApiConnect is dispatched")
  }, [dispatch])

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
