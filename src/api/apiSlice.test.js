import { configStore } from '../app/store';
import socketMock from '../testUtils/socketMock'; 
import api, { subscribeApiConnect } from './apiSlice';


describe('async api actions', () => {
  it('should handle initial state', () => {
    expect(api(undefined, {})).toEqual({isConnected: false})
  });

  it('it dispatches connected action subscribeApiConnect', () => {
    const store = configStore(socketMock);

    store.dispatch(subscribeApiConnect());

    const { api } = store.getState();
    expect(api).toEqual({isConnected: true});
  });
});
