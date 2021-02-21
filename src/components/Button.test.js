import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button test', () => {
  it('renders', () => {
    render(<Button text="New Game" onClick={() => {}} />);

    expect(screen.getByRole('button')).toHaveTextContent('New Game');
  });

  it('calls handleClick on click', () => {
    const handleClick = jest.fn();

    render(<Button text="New Game" onClick={handleClick} />);
    fireEvent.click(screen.getByText('New Game'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
