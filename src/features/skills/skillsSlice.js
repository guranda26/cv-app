import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getStoredSkills = () => {
  const storedSkills = localStorage.getItem("skills");
  return storedSkills ? JSON.parse(storedSkills) : [];
};

export const storeSkills = (skills, isNewSkills = false) => {
  let storedSkills = getStoredSkills() || [];

  if (storedSkills.length === 0) {
    storedSkills = skills;
  } else {
    storedSkills = [
      ...storedSkills,
      ...skills.filter(
        (newSkill) => !storedSkills.some((skill) => skill.id === newSkill.id)
      ),
    ];
  }
  console.log("Saving skills to localStorage:", storedSkills);
  localStorage.setItem("skills", JSON.stringify(storedSkills));
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
      skills: getStoredSkills() || [],
    },
    status: "idle",
  },

  reducers: {
    toggleForm: (state) => {
      state.skillsIsOpen = !state.skillsIsOpen;
    },
    toggleSkillRemove: (state, action) => {
      const skillId = action.payload;
      state.data.skills = state.data.skills.filter(
        (skill) => skill.id !== skillId
      );
      localStorage.setItem("skills", JSON.stringify(state.data.skills));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSkills.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchSkills.fulfilled, (state, action) => {
      state.status = "success";
      const apiSkills = action.payload;
      const storedSkills = getStoredSkills();

      const mergedSkills = Array.isArray(apiSkills)
        ? [...storedSkills, ...apiSkills]
        : storedSkills;

      state.data.skills = mergedSkills;
      localStorage.setItem("skills", JSON.stringify(mergedSkills));
    });

    builder.addCase(fetchSkills.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    builder.addCase(postSkills.fulfilled, (state, action) => {
      const { id, name, range } = action.payload.skill;

      const newSkill = {
        id: uuidv4(),
        name,
        range,
        isVisible: true,
      };

      state.data.skills.push(newSkill);
      localStorage.setItem("skills", JSON.stringify(state.data.skills));
    });
  },
});

export const { toggleForm, toggleSkillRemove } = skillsSlice.actions;

const skillsReducer = skillsSlice.reducer;
export default skillsReducer;
