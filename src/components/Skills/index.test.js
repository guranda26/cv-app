import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Skills } from "./index";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
test("toggles form visibility when 'Open edit' button is clicked", async () => {
  const store = mockStore({
    skills: {
      data: {
        skills: [{ id: 1, name: "Skill" }],
      },
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
  await screen.findByLabelText("Skill name");
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
