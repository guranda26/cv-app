import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEducation = createAsyncThunk(
  "educations/fetchEducation",
  async () => {
    const response = await axios.get("/api/educations");
    return response.data;
  }
);

const educationsSlice = createSlice({
  name: "educations",
  initialState: {
    data: [], // initial data state
    status: "idle", // initial status
    error: null, // optional error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default educationsSlice.reducer;
