import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { configStore } from "./app/store";

const socket = {
  on: jest.fn(),
};

describe("App", () => {
  it("renders", () => {
    render(
      <Provider store={configStore(socket)}>
        <App />
      </Provider>
    );

    expect(screen.getByRole("button")).toHaveTextContent("New Game");
  });
});
