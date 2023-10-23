import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getStoredSkills = () => {
  const storedSkills = localStorage.getItem("skills");
  return storedSkills ? JSON.parse(storedSkills) : null;
};

export const storeSkills = (skills) => {
  const stored = getStoredSkills();
  const mergedSkills = stored ? [...skills, ...stored] : skills;
  localStorage.setItem("skills", JSON.stringify(mergedSkills));
};

// Fetching skills from the API
export const fetchSkills = createAsyncThunk("content/fetchSkills", async () => {
  const res = await axios("api/skills");
  const skills = await res.data;
  return skills;
});

export const postSkills = createAsyncThunk(
  "content/postSkills",
  async (data) => {
    try {
      const { skillName, skillRange } = data;
      const res = await axios.post("api/skills", {
        name: skillName,
        range: skillRange,
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  }
);

const skillsSlice = createSlice({
  name: "skills",

  initialState: {
    skillsIsOpen: false,
    data: {
      skills: {},
    },
    status: "loading",
  },
  reducers: {
    toggleForm: (state) => {
      state.skillsIsOpen = !state.skillsIsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSkills.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSkills.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });

    builder.addCase(fetchSkills.rejected, (state) => {
      state.status = "failure";
    });

    builder.addCase(postSkills.fulfilled, (state, action) => {
      state.data = {
        ...state.data,
        skills: {
          ...state.data.skills,
          [action.payload.id]: action.payload,
        },
      };
      // Update localStorage
      storeSkills(Object.values(state.data.skills));
    });
  },
});

export const { toggleForm } = skillsSlice.actions;

const skillsReducer = skillsSlice.reducer;
export default skillsReducer;
