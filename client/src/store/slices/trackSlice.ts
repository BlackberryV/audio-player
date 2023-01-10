import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TrackState } from "../../types/track";
import axios from "axios";

const initialState: TrackState = {
  tracks: [],
  error: "",
};

export const fetchTracks = createAsyncThunk("track/fetchTracks", async () => {
  const response = await axios.get("http://localhost:3001/tracks");
  return response.data;
});

export const searchTracks = createAsyncThunk(
  "track/searchTracks",
  async (query: string) => {
    const response = await axios.get(
      `http://localhost:3001/tracks/search?query=${query}`
    );
    return response.data;
  }
);

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
    });
    builder.addCase(fetchTracks.rejected, (state) => {
      state.error = "error happened";
    });
    builder.addCase(searchTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
    });
    builder.addCase(searchTracks.rejected, (state) => {
      state.error = "error happened";
    });
  },
});

export default trackSlice.reducer;
