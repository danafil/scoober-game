import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Game from './Game';

describe('Game', () => {
	// workaround for https://github.com/jsdom/jsdom/issues/1695
	window.HTMLElement.prototype.scrollIntoView = function() {};

  const getDefaultProps = () => ({
    startingNumber: 42,
    handleAttempt: jest.fn(),
  });

  it('renders the number', () => {
    const props = { ...getDefaultProps() };

    render(<Game {...props} />);

    expect(screen.getByText(`${props.startingNumber}`)).toBeInTheDocument();
  });

  it('renders buttons', () => {
    const props = getDefaultProps();

    render(<Game {...props} />);
    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveTextContent('-1');
    expect(buttons[1]).toHaveTextContent('0');
    expect(buttons[2]).toHaveTextContent('1');
  });

  it('calls handleAttempt', () => {
    const props = getDefaultProps();

    render(<Game {...props} />);
    fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('1'));

    expect(props.handleAttempt.mock.calls[0][0]).toBe(-1);
    expect(props.handleAttempt.mock.calls[1][0]).toBe(0);
    expect(props.handleAttempt.mock.calls[2][0]).toBe(1);
  });

  it('shows waiting for your turn message', () => {
    const props = { ...getDefaultProps(), canSubmit: false };

    render(<Game {...props} />);

    expect(screen.getByText('Waiting oponent turn...')).toBeInTheDocument();
  });

	it('shows your turn message', () => {
    const props = { ...getDefaultProps(), canSubmit: true };

    render(<Game {...props} />);

    expect(screen.getByText('Your turn!')).toBeInTheDocument();
  });
});
