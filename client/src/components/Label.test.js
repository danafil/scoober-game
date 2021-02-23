import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label test', () => {
  it('renders text', () => {
    render(<Label text="Game" />);

    expect(screen.getByText('Game')).toHaveTextContent('Game');
  });
});
