import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header test', () => {
  it('renders title', () => {
    render(<Header text="Scoober team" />);

    expect(screen.getByText('Scoober team')).toHaveTextContent('Scoober team');
  });
});
