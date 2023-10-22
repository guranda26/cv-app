import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./services/server";
import { Provider } from "react-redux";
import { store } from "./app/store";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);
