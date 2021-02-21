import { createSlice } from '@reduxjs/toolkit';

const generateId = () => `${Date.now()}`;
export const selfId = generateId();
export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    isStarted: false,
    playerOne: {
      id: selfId,
      name: selfId,
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
  socket.emit('newgame', attempt);
}

export const sendAttempt = (attempt) => (socket) => {
  //TODO prevent user to click multiple times
  socket.emit('turn', attempt);
}

export default gameSlice.reducer;
