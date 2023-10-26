import { configureStore } from "@reduxjs/toolkit";
import skillsReducer, {
  fetchSkills,
  postSkills,
  toggleForm,
  toggleSkillRemove,
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

  it("should handle failed fetchSkills", async () => {
    jest
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(new Error("Failed to fetch"));

    await store.dispatch(fetchSkills());

    expect(store.getState().skills.status).toEqual("error");
  });

  it("should post skills", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ id: 2, name: "New Skill" }),
    });
    await store
      .dispatch(postSkills({ skillName: "New Skill", skillRange: 50 }))
      .then(() => {
        expect(store.getState().skills.status).toEqual("idle");
        expect(store.getState().skills.data.skills).toEqual([]);
      });
  });

  it("should toggle skill removal", () => {
    const initialState = {
      skillsIsOpen: false,
      data: {
        skills: [{ id: 1, name: "Skill 1", range: 50, isVisible: true }],
      },
      status: "idle",
    };

    const store = configureStore({
      reducer: {
        skills: skillsReducer,
      },
      preloadedState: initialState,
    });
    store.dispatch(toggleSkillRemove(1));
    const updatedState = store.getState().skills;
    expect(updatedState.data.skills[0]).toEqual(undefined);
  });
});
