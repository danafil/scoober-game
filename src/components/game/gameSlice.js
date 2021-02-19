import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    isStarted: false,
  },
  reducers: {
    startGame: state => ({ ...state, isStarted: true }),
  },
});

export const { startGame } = gameSlice.actions;

export const selectGame = state => state.game.isStarted;

export default gameSlice.reducer;
