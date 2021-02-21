import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    isConnected: false,
  },
  reducers: {
    connected: (state) => ({ ...state, isConnected: true }),
  },
});

//======================== ACTIONS ========================//

export const { connected } = apiSlice.actions;

//===================== ASYNC ACTIONS =====================//

export const subscribeApiConnect = () => (socket, dispatch) => {
  socket.on('connect', () => dispatch(connected()));
};

//======================== SELECTOR =======================//

export const selectApi = (state) => state.api;

//======================== REDUCER ========================//

export default apiSlice.reducer;
