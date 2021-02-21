import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GameSummary from './GameSummary';

describe('GameSummary', () => {
  const getDefaultProps = () => ({
    initGame: jest.fn(),
    player: { id: '001' },
  });

  it('renders buttons', () => {
    const props = getDefaultProps();

    render(<GameSummary {...props} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('New Single Game');
    expect(buttons[1]).toHaveTextContent('New Multiplayer Game');
  });

  it('renders message if player win', () => {
    const props = getDefaultProps();
    const selfId = '007';
    props.winner = selfId;

    render(<GameSummary {...props} selfId={selfId} />);

    const message = screen.getByText('You won');
    expect(message).toHaveTextContent('You won');
  });

  it('renders message if player lost', () => {
    const props = getDefaultProps();
    props.winner = 'dummyId';

    render(<GameSummary {...props} />);

    const message = screen.getByText('You lost');
    expect(message).toHaveTextContent('You lost');
  });

  it('calls initGame', () => {
    const props = getDefaultProps();

    render(<GameSummary {...props} />);
    fireEvent.click(screen.getByText('New Single Game'));
    fireEvent.click(screen.getByText('New Multiplayer Game'));

    expect(props.initGame).toHaveBeenCalledTimes(2);
  });
});
