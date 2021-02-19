import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../components/game/gameSlice';

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
