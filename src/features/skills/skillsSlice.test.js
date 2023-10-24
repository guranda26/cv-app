import { configureStore } from "@reduxjs/toolkit";
import skillsReducer, {
  fetchSkills,
  postSkills,
  toggleForm,
} from "./skillsSlice";

describe("skillsSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        skills: skillsReducer,
      },
    });
  });

  it("should toggle form", () => {
    store.dispatch(toggleForm());
    expect(store.getState().skills.skillsIsOpen).toEqual(true);

    store.dispatch(toggleForm());
    expect(store.getState().skills.skillsIsOpen).toEqual(false);
  });

  it("should fetch skills", async () => {
    // Mock the API call
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest
        .fn()
        .mockResolvedValueOnce({ skills: { id: 1, name: "Skill" } }),
    });

    await store.dispatch(fetchSkills());

    expect(store.getState().skills.status).toEqual("failure");
    expect(store.getState().skills.data).toEqual({
      skills: {},
    });
  });

  it("should handle failed fetchSkills", async () => {
    jest
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(new Error("Failed to fetch"));

    await store.dispatch(fetchSkills());

    expect(store.getState().skills.status).toEqual("failure");
  });

  it("should post skills", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ id: 2, name: "New Skill" }),
    });

    await store.dispatch(
      postSkills({ skillName: "New Skill", skillRange: 50 })
    );
  });
});
