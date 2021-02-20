import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    isConnected: false,
  },
  reducers: {
    connected: state => ({ ...state, isConnected: true }),
  },
});

export const { connected } = apiSlice.actions;

export const subscribeApiConnect = () => (socket, dispatch) => {
  socket.on('connect', () => dispatch(connected()));
}

export const selectApi = state => state.api;

export default apiSlice.reducer;

