import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "../../types/player";
import { ITrack } from "../../types/track";

const initialState: PlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 50,
  pause: true,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    pauseTrack: (state) => {
      return { ...state, pause: true };
    },
    playTrack: (state) => {
      return { ...state, pause: false };
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      return { ...state, currentTime: action.payload };
    },
    setVolume: (state, action: PayloadAction<number>) => {
      return { ...state, volume: action.payload };
    },
    setDuration: (state, action: PayloadAction<number>) => {
      return { ...state, duration: action.payload };
    },
    setActive: (state, action: PayloadAction<null | ITrack>) => {
      return { ...state, active: action.payload, duration: 0, currentTime: 0 };
    },
  },
});

export const {
  pauseTrack,
  playTrack,
  setCurrentTime,
  setVolume,
  setDuration,
  setActive,
} = playerSlice.actions;

export default playerSlice.reducer;
