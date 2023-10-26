import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../features/education/educationsSlice";
import skillsReducer from "../features/skills/skillsSlice";

export const store = configureStore({
  reducer: {
    educations: educationReducer,
    skills: skillsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
