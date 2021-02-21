import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GameInit from './GameInit';
 
describe('GameInit', () => {
  const getDefaultProps = () => ({
    initGame: jest.fn(),
    isConnected: true,
  });

  it('renders buttons', () => {
    const props = getDefaultProps();

    render(<GameInit { ...props } />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('New Single Game');
    expect(buttons[1]).toHaveTextContent('New Multiplayer Game');
  });

  it('renders message if not isConnected', () => {
    const props = {
      ...getDefaultProps(),
      isConnected: false,
    };

    render(<GameInit { ...props } />);

    const message = screen.getByText('Connecting...');
    expect(message).toHaveTextContent('Connecting...');
  });

  it('renders no message if isConnected', () => {
    const props = {
      ...getDefaultProps(),
    };

    render(<GameInit { ...props } />);

    expect(screen.queryByText(/Connecting/i)).toBeNull()
  });

  it('calls initGame', () => {
    const props = getDefaultProps();

    render(<GameInit { ...props } />);
    fireEvent.click(screen.getByText('New Single Game'));
    fireEvent.click(screen.getByText('New Multiplayer Game'));

    expect(props.initGame).toHaveBeenCalledTimes(2);
    expect(props.initGame.mock.calls[0][0]).toBe(true);
    expect(props.initGame.mock.calls[1][0]).toBe(false);
  });
});
