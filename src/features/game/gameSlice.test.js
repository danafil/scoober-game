import { configStore } from '../../app/store';
import socketMock from '../../testUtils/socketMock';
import game, {
  startGame,
  subscribeGameStart,
  initGameStart,
  sendAttempt,
  selfId,
  selectGame,
  selectGameInProgress,
  selectSelfTurn,
} from './gameSlice';

describe('gameSlice', () => {
  it('should handle initial state', () => {
    const initState = {
      isStarted: false,
      selfId,
    };

    expect(game(undefined, {})).toEqual(initState);
  });

  describe('Actions, reducer', () => {
    it('it update state on startGame action dispatch', () => {
      const store = configStore(socketMock);
      const gameMock = {
        id: '111',
        selfId,
      };

      store.dispatch(startGame(gameMock));

      const { game } = store.getState();
      expect(game).toEqual({ ...gameMock, isStarted: true });
    });

    it('it updates state on subscribeGameStart', () => {
      socketMock.on = jest.fn((_, cb) => cb());
      const store = configStore(socketMock);

      store.dispatch(subscribeGameStart());

      const { game } = store.getState();
      expect(game.isStarted).toBe(true);
      expect(socketMock.on.mock.calls[0][0]).toEqual('game');
    });

    it('it calls socket.emit on initGameStart', () => {
      const store = configStore(socketMock);
      const mockedUser = { id: '001' };

      store.dispatch(initGameStart(mockedUser));

      expect(socketMock.emit).toHaveBeenCalledWith('newgame', mockedUser);
    });

    it('it calls socket.emit on sendAttempt', () => {
      const store = configStore(socketMock);
      const mockedTurn = '001';

      store.dispatch(sendAttempt(mockedTurn));

      expect(socketMock.emit).toHaveBeenCalledWith('turn', mockedTurn);
    });
  });

  describe('Selectors', () => {
    it('it selects game', () => {
      const store = configStore(socketMock);

      const state = store.getState();
      expect(state.game).toEqual(selectGame(state));
    });

    it('it selects gameInProgress to be true if game started and no winner', () => {
      const state = {
        game: {
          isStarted: true,
          winner: null,
        },
      };

      expect(selectGameInProgress(state)).toBe(true);
    });

    it('it selects gameInProgress to be false if game not started and no winner', () => {
      const state = {
        game: {
          isStarted: false,
          winner: null,
        },
      };

      expect(selectGameInProgress(state)).toBe(false);
    });

    it('it selects gameInProgress to be false if game started and has winner', () => {
      const state = {
        game: {
          isStarted: true,
          winner: '007',
        },
      };

      expect(selectGameInProgress(state)).toBe(false);
    });

    it('it selects gameInProgress to be false if game not started and has winner', () => {
      const state = {
        game: {
          isStarted: false,
          winner: null,
        },
      };

      expect(selectGameInProgress(state)).toBe(false);
    });

    it('it selects selectSelfTurn to be true', () => {
      const state = {
        game: {
          isStarted: true,
          turn: '007',
          selfId: '007',
        },
      };

      expect(selectSelfTurn(state)).toBe(true);
    });

    it('it selects selectSelfTurn to be false if game not started', () => {
      const state = {
        game: {
          isStarted: false,
          turn: '007',
          selfId: '007',
        },
      };

      expect(selectSelfTurn(state)).toBe(false);
    });

    it('it selects selectSelfTurn to be false if turn !== selfId', () => {
      const state = {
        game: {
          isStarted: true,
          turn: '001',
          selfId: '007',
        },
      };

      expect(selectSelfTurn(state)).toBe(false);
    });
  });
});
