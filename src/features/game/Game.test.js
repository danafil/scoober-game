import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Game from './Game';
 
describe('Game', () => {
  const getDefaultProps = () => ({
    value: 42,
    handleTurn: jest.fn(),
  });

  it('renders the number', () => {
    const props = { ...getDefaultProps() }

    render(<Game { ...props }/>);

    expect(screen.getByText(`${props.value}`)).toBeInTheDocument();
  });

  it('renders buttons', () => {
    const props = getDefaultProps();

    render(<Game { ...props }/>);
    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveTextContent('-1');
    expect(buttons[1]).toHaveTextContent('0');
    expect(buttons[2]).toHaveTextContent('1');
  });

  it('calls handleTurn', () => {
    const props = getDefaultProps();

    render(<Game { ...props }/>);
    fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('1'));

    expect(props.handleTurn.mock.calls[0][0]).toBe(-1);
    expect(props.handleTurn.mock.calls[1][0]).toBe(0);
    expect(props.handleTurn.mock.calls[2][0]).toBe(1);
  });
});
