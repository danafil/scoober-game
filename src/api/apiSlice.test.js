import { configStore } from '../app/store';
import socketMock from '../testUtils/socketMock';
import api, { subscribeApiConnect, selectApi } from './apiSlice';

describe('async api actions', () => {
  it('should handle initial state', () => {
    expect(api(undefined, {})).toEqual({ isConnected: false });
  });

  it('dispatches connected action subscribeApiConnect', () => {
    const store = configStore(socketMock);

    store.dispatch(subscribeApiConnect());

    const { api } = store.getState();
    expect(api).toEqual({ isConnected: true });
  });

  it('select api from state', () => {
    const state = {
      api: {
        connected: true,
      },
      game: {
        id: '123',
      },
    };

    expect(selectApi(state)).toEqual(state.api);
  });
});
