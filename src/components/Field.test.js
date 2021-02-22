import React from 'react';
import { render, screen } from '@testing-library/react';
import Field from './Field';

describe('Field test', () => {
  it('renders text', () => {
    render(<Field text="Game" />);

    expect(screen.getByText('Game')).toHaveTextContent('Game');
  });
});
