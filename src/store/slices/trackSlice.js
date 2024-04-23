import {
    createSlice
} from "@reduxjs/toolkit";
import {
    playShuffleTrack
} from "../../utils/helper";

const trackSlice = createSlice({
    name: "tracks",
    initialState: {
        currentTrack: null,
        isPlaying: false,
        isShuffle: false,
        initialTracks: [],
        shuffleTracks: [],
        likedTracks: [],
        currentTrackIndex: null,
        isLiked: false,
        isDisliked: false,
    },
    reducers: {
        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload;
            state.isPlaying = true;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload
        },
        setIsShuffle: (state) => {
            state.isShuffle = !state.isShuffle;
            const playList = [...state.initialTracks];
            if (state.initialTracks) {
                state.shuffleTracks = playShuffleTrack(playList);
            }
        },
        setPrev: (state) => {
            const tracks = state.isShuffle ? state.shuffleTracks : state.initialTracks;
            const currentTrackIndex = tracks.findIndex((track) => track.id === state.currentTrack.id);
            if (currentTrackIndex === 0) {
                return;
            } else {
                const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length
                state.currentTrack = tracks[newIndex];
            }
        },
        setNext: (state) => {
            const tracks = state.isShuffle ? state.shuffleTracks : state.initialTracks;
            const currentTrackIndex = tracks.findIndex((track) => track.id === state.currentTrack.id);
            if (currentTrackIndex === tracks.length - 1) {
                return;
            } else {
                const newIndex = (currentTrackIndex + 1 + tracks.length) % tracks.length
                state.currentTrack = tracks[newIndex];
            }


        },
        setIsLiked: (state, action) => {
            state.isLiked = action.payload;
            // Если трек понравился, добавляем его в список понравившихся треков
            if (action.payload) {
                state.likedTracks.push(state.currentTrack);
            } else {
                // Если трек больше не понравился, удаляем его из списка понравившихся треков
                const index = state.likedTracks.findIndex(track => track.id === state.currentTrack.id);
                if (index !== -1) {
                    state.likedTracks.splice(index, 1);
                }
            }
            state.isDisliked = false; // Сбрасываем флаг "дизлайк"
        },

        setIsDisliked: (state, action) => {
            state.isDisliked = action.payload;
            // Можно добавить аналогичную логику для обработки действия "дизлайк"
            state.isLiked = false; // Сбрасываем флаг "лайк"
        },
    },

})

export const {
    setCurrentTrack,
    setPrev,
    setNext,
    setInitialTracks,
    setIsShuffle,
    setIsPlaying,
    setIsLiked,
    setIsDisliked,
} = trackSlice.actions;
export default trackSlice.reducer