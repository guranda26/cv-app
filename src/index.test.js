/* eslint-disable import/first */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { makeServer } from "./services/server";
import App from "./App";

jest.mock("./services/server", () => ({
  makeServer: jest.fn(),
}));

describe("App Initialization", () => {
  let rootElement;

  beforeEach(() => {
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    document.body.removeChild(rootElement);
  });

  it("renders without crashing in development mode", () => {
    process.env.NODE_ENV = "development";
    ReactDOM.render(
      <Router>
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
      </Router>,
      rootElement
    );

    expect(makeServer).not.toHaveBeenCalled();
    process.env.NODE_ENV = "test";
  });

  it("renders without crashing in production mode", () => {
    process.env.NODE_ENV = "production";
    ReactDOM.render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
      rootElement
    );

    expect(makeServer).not.toHaveBeenCalled();
    process.env.NODE_ENV = "test";
  });
});
