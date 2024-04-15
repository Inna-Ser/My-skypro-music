import {
    createSlice
} from "@reduxjs/toolkit";

const volumeSlice = createSlice({
    name: "volume",
    initialState: {
        isMute: false
    },
    reducers: {
        setIsMute: (state) => {
            state.isMute = !state.isMute;
        }
    }
})

export const {
    setIsMute,
} = volumeSlice.actions;
export default volumeSlice.reducer