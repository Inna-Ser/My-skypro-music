import { configureStore } from "@reduxjs/toolkit";
import trackSlice from "./slices/trackSlice";
import volumeSlice from "./slices/volumeSlice";

export const store = configureStore({
    reducer: {
        tracks: trackSlice,
        volume: volumeSlice,
    }
})

