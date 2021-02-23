import React from 'react';
import { render, screen } from '@testing-library/react';
import GameSummary from './GameSummary';

describe('GameSummary', () => {
  const getDefaultProps = () => ({
    initGame: jest.fn(),
    player: { id: '001' },
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
});
