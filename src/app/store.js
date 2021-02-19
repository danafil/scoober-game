import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import apiReducer from '../api/apiSlice';
import { createSocketApiMiddleware } from '../api/apiMiddleware';

export const configStore = (socket) => {
  const apiMiddleware = createSocketApiMiddleware(socket);
  const middleware = [apiMiddleware, ...getDefaultMiddleware()];
  return configureStore({
    reducer: {
      game: gameReducer,
      api: apiReducer,
    },
    middleware,
  });
};
