import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./slices/playerSlice";
import trackSlice from "./slices/trackSlice";

export const store = configureStore({
  reducer: { player: playerSlice, track: trackSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
