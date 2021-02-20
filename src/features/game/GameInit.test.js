import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GameInit from './GameInit';
 
describe('GameInit', () => {
  const getDefaultProps = () => ({
    initGame: jest.fn(),
    isConnected: true,
  });

  it('renders button', () => {
    const props = getDefaultProps();

    render(<GameInit { ...props } />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('New Game');
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
    fireEvent.click(screen.getByText('New Game'));

    expect(props.initGame).toHaveBeenCalledTimes(1);
  });
});
