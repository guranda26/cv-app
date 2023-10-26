import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchEducation } from "./educationsSlice";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("educationSlice Async Actions", () => {
  it("should dispatch fetchEducation and handle success", async () => {
    const expectedData = [];
    // Mocking axios to return a successful response
    axios.get = jest.fn(() => Promise.resolve({ data: expectedData }));

    const store = mockStore({ educations: [] });

    // Dispatch the fetchEducation async action
    await store.dispatch(fetchEducation());

    const actions = store.getActions();
    // Verify the actions dispatched
    expect(actions[0].type).toBe(fetchEducation.pending.type);
    expect(actions[1].type).toBe(fetchEducation.fulfilled.type);
    expect(actions[1].payload).toEqual(expectedData);
  });
});

describe("educationSlice Reducer", () => {
  const educationsReducer = require("./educationsSlice").default;

  it("should handle fetchEducation.pending action", () => {
    const initialState = { data: [], status: "idle", error: null };
    const action = { type: fetchEducation.pending.type };
    const newState = educationsReducer(initialState, action);
    expect(newState.status).toBe("loading");
  });

  it("should handle fetchEducation.fulfilled action", () => {
    const initialState = { data: [], status: "loading", error: null };
    const mockData = [];
    const action = { type: fetchEducation.fulfilled.type, payload: mockData };
    const newState = educationsReducer(initialState, action);
    expect(newState.status).toBe("success");
    expect(newState.data).toEqual(mockData);
  });

  it("should handle fetchEducation.rejected action", () => {
    const initialState = { data: [], status: "loading", error: null };
    const errorMessage = "Error message";
    const action = {
      type: fetchEducation.rejected.type,
      error: { message: errorMessage },
    };
    const newState = educationsReducer(initialState, action);
    expect(newState.status).toBe("failed");
    expect(newState.error).toBe(errorMessage);
  });
});
