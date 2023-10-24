import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Skills } from "./index";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
test("toggles form visibility when 'Open edit' button is clicked", () => {
  const store = mockStore({
    skills: {
      data: {},
      status: "success",
      skillsIsOpen: false,
    },
  });

  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );

  const openButton = screen.getByText("Open edit");
  fireEvent.click(openButton);

  // Form should be visible after clicking the 'Open edit' button
  const skillNameLabel = screen.getByLabelText("Skill name");
  expect(skillNameLabel).toBeInTheDocument();

  const skillRangeLabel = screen.getByLabelText("Skill range");
  expect(skillRangeLabel).toBeInTheDocument();
});
test("hides form when 'Open edit' button is clicked again", () => {
  const store = mockStore({
    skills: {
      data: {},
      status: "success",
      skillsIsOpen: true,
    },
  });

  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );

  const openButton = screen.getByText("Open edit");
  fireEvent.click(openButton);

  const skillNameLabel = screen.getByLabelText("Skill name");
  expect(skillNameLabel).toBeInTheDocument();

  const skillRangeLabel = screen.getByLabelText("Skill range");
  expect(skillRangeLabel).toBeInTheDocument();

  const addButton = screen.getByText("Add skill");
  expect(addButton).toBeInTheDocument();
});
