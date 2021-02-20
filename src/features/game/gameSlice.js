import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    isStarted: false,
    playerOne: {
      id: '001',
      name: 'John',
    }
  },
  reducers: {
    startGame: (state, { payload }) => ({ ...payload, isStarted: true }),
  },
});

export const { startGame } = gameSlice.actions;

export const selectGame = state => state.game;

export const subscribeGameStart = () => (socket, dispatch) => {
  socket.on('game', (game) => dispatch(startGame(game)))
}

export const initGameStart = (attempt) => (socket) => {
	console.log(attempt);
  socket.emit('newgame', attempt);
}

export const sendTurn = (turn) => (socket, dispatch) => {
  //TODO prevent user to click multiple times
  socket.emit('turn', turn);
}

export default gameSlice.reducer;
