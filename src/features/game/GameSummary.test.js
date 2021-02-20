import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GameSummary from "./GameSummary";

describe("GameSummary", () => {
  const getDefaultProps = () => ({
    initGame: jest.fn(),
    player: { id: "001" },
  });

  it("renders button", () => {
    const props = getDefaultProps();

    render(<GameSummary {...props} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("New Game");
  });

  it("renders message if player win", () => {
    const props = getDefaultProps();
    props.winner = props.player.id;

    render(<GameSummary {...props} />);

    const message = screen.getByText("You won");
    expect(message).toHaveTextContent("You won");
  });

  it("renders message if player lost", () => {
    const props = getDefaultProps();
    props.winner = "dummyId";

    render(<GameSummary {...props} />);

    const message = screen.getByText("You lost");
    expect(message).toHaveTextContent("You lost");
  });

  it("calls initGame", () => {
    const props = getDefaultProps();

    render(<GameSummary {...props} />);
    fireEvent.click(screen.getByText("New Game"));

    expect(props.initGame).toHaveBeenCalledTimes(1);
  });
});
