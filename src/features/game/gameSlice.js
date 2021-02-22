import { createSlice } from '@reduxjs/toolkit';

const generateId = () => `${Date.now()}`;
export const selfId = generateId();

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    selfId,
    selfImg: 'player.png',
    opponentImg: 'opponent.png',
    isStarted: false,
    isSubmitting: false,
		attempts: [],
  },
  reducers: {
    startGame: (state, { payload }) => {
      const attempts = payload.attempts;
      const selfId = state.selfId;
      const nextAttempts = attempts.map((a) => {
        if (a.user.id === selfId) {
          return {
            ...a,
            user: { ...a.user, profileImg: state.selfImg, isSelf: true },
          };
        } else {
          return {
            ...a,
            user: { ...a.user, profileImg: state.opponentImg, isSelf: false },
          };
        }
      });
      return { ...state, ...payload, attempts: nextAttempts, isStarted: true, isSubmitting: false };
    },
    submitAttempt: (state) => ({ ...state, isSubmitting: true}),
  },
});

//======================== ACTIONS ========================//

export const { startGame, submitAttempt } = gameSlice.actions;

//====================== ASYNC ACTIONS ====================//

export const subscribeGameStart = () => (socket, dispatch) => {
  socket.on('game', (game) => dispatch(startGame(game)));
};

export const initGameStart = (attempt) => (socket) => {
  socket.emit('newgame', attempt);
};

export const sendAttempt = (attempt) => (socket, dispatch) => {
  dispatch(submitAttempt());
  socket.emit('turn', attempt);
};

//======================= SELECTORS =======================//

export const selectGame = (state) => state.game;

export const selectGameInProgress = ({ game }) =>
  game.isStarted && !game.winner;

export const selectCanSubmit = ({ game }) =>
  game.isStarted && game.turn === game.selfId && !game.isSubmitting;

//======================= REDUCER =========================//

export default gameSlice.reducer;
