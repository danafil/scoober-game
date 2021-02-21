import { createSlice } from '@reduxjs/toolkit';

const generateId = () => `${Date.now()}`;
export const selfId = generateId();

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    selfId,
    isStarted: false,
  },
  reducers: {
    startGame: (state, { payload }) => {
      return { ...payload, isStarted: true, selfId: state.selfId };
    },
  },
});

//======================== ACTIONS ========================//

export const { startGame } = gameSlice.actions;

//====================== ASYNC ACTIONS ====================//

export const subscribeGameStart = () => (socket, dispatch) => {
  socket.on('game', (game) => dispatch(startGame(game)));
};

export const initGameStart = (attempt) => (socket) => {
  socket.emit('newgame', attempt);
};

export const sendAttempt = (attempt) => (socket) => {
  //TODO prevent user to click multiple times
  socket.emit('turn', attempt);
};

//======================= SELECTORS =======================//

export const selectGame = (state) => state.game;

export const selectGameInProgress = ({ game }) =>
  game.isStarted && !game.winner;

export const selectSelfTurn = ({ game }) =>
  game.isStarted && game.turn === game.selfId;

//======================= REDUCER =========================//

export default gameSlice.reducer;
