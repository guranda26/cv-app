import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../features/education/educationsSlice";
import skillsReducer from "../features/skills/skillsSlice";

describe("Redux Store", () => {
  it("should have correct initial state", () => {
    const store = configureStore({
      reducer: {
        educations: educationReducer,
        skills: skillsReducer,
      },
    });

    const expectedInitialState = {
      educations: {
        data: [],
        error: null,
        status: "idle",
      },
      skills: {
        data: {
          skills: {},
        },
        skillsIsOpen: false,
        status: "loading",
      },
    };

    expect(store.getState()).toEqual(expectedInitialState);
  });

  it("should handle EDUCATIONS_FETCH_SUCCESS action", () => {
    const store = configureStore({
      reducer: {
        educations: educationReducer,
        skills: skillsReducer,
      },
    });

    const action = {
      type: "educations/educationsFetched",
      payload: [],
    };

    store.dispatch(action);

    const expectedState = {
      educations: {
        data: action.payload,
        error: null,
        status: "idle",
      },
      skills: {
        data: {
          skills: {},
        },
        skillsIsOpen: false,
        status: "loading",
      },
    };

    expect(store.getState()).toEqual(expectedState);
  });

  it("should handle SKILLS_FETCH_SUCCESS action", () => {
    const store = configureStore({
      reducer: {
        educations: educationReducer,
        skills: skillsReducer,
      },
    });

    const action = {
      type: "skills/skillsFetched",
      payload: [
        // Some skills data
      ],
    };

    store.dispatch(action);

    const expectedState = {
      educations: {
        data: [],
        error: null,
        status: "idle",
      },
      skills: {
        data: {
          skills: {},
        },
        skillsIsOpen: false,
        status: "loading",
      },
    };

    expect(store.getState()).toEqual(expectedState);
  });
});
