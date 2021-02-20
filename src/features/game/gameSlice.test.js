import { configStore } from '../../app/store';
import socketMock from '../../testUtils/socketMock'; 
import game, {
  startGame,
  subscribeGameStart,
  initGameStart,
  sendAttempt,
} from './gameSlice';


describe('gameSlice', () => {
  it('should handle initial state', () => {
    const initState = {
      isStarted: false,
      playerOne: {
        id: '001',
        name: 'John',
      }
    }

    expect(game(undefined, {})).toEqual(initState)
  });

  it('it update state on startGame action dispatch', () => {
    const store = configStore(socketMock);
    const gameMock = {
      id: '111'
    };

    store.dispatch(startGame(gameMock));

    const { game } = store.getState();
    expect(game).toEqual({...gameMock, isStarted: true});
  });

  it('it updates state on subscribeGameStart', () => {
    socketMock.on = jest.fn((_, cb) => cb());
    const store = configStore(socketMock);

    store.dispatch(subscribeGameStart());

    const { game } = store.getState();
    expect(game).toEqual({isStarted: true});
    expect(socketMock.on.mock.calls[0][0]).toEqual('game');
  });

  it('it calls socket.emit on initGameStart', () => {
    const store = configStore(socketMock);
    const mockedUser = {id: '001'};

    store.dispatch(initGameStart(mockedUser));

    expect(socketMock.emit).toHaveBeenCalledWith('newgame', mockedUser)
  });

  it('it calls socket.emit on sendAttempt', () => {
    const store = configStore(socketMock);
    const mockedTurn = '001';

    store.dispatch(sendAttempt(mockedTurn));

    expect(socketMock.emit).toHaveBeenCalledWith('turn', mockedTurn);
  });
});

