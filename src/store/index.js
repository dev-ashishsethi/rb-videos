import { configureStore, createSlice } from "@reduxjs/toolkit";

const likedVideosSlice = createSlice({
  name: "likedVideos",
  initialState: [],
  reducers: {
    addLikedVideo(state, action) {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
    removeLikedVideo(state, action) {
      state = state.filter((video) => video.id !== action.payload);
      return state;
    },
  },
});

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState: { watchLaterVideos: [], watchLaterPage: false },
  reducers: {
    addWatchLaterHandler(state, action) {
      state.watchLaterVideos = action.payload;
      return state;
    },
    removeWatchLaterHandler(state, action) {
      state.watchLaterVideos = action.payload;
      return state;
    },
    watchLaterPage(state, action) {
      state.watchLaterPage = action.payload;
      return state;
    },
  },
});
const historySlice = createSlice({
  name: "history",
  initialState: { historyVideos: [], historyPage: false },
  reducers: {
    adddToHistory(state, action) {
      state.historyVideos = action.payload;
      return state;
    },
    clearAllHistory(state, action) {
      state.historyVideos = action.payload;
      return state;
    },
    deleteFromHistory(state, action) {
      state.historyVideos = action.payload;
      return state;
    },
    setHistoryPage(state, action) {
      state.historyPage = action.payload;
      return state;
    },
  },
});

const playlistSlice = createSlice({
  name: "playlist",
  initialState: { playlists: [], playlistObj: {}, playlistPage: false },
  reducers: {
    createPlaylist(state, action) {
      state.playlists = action.payload;
      return state;
    },
    deletePlaylist(state, action) {
      state = action.payload;
      return state;
    },
    addVideoToPlaylist(state, action) {
      state.playlists = action.payload;
      return state;
    },
    singlePlaylist(state, action) {
      state.playlistPage = action.payload;
      return state;
    },
    deleteVideoFromPlaylist(state, action) {
      state.playlists = action.payload;
      return state;
    },
    setPlaylistObj(state, action) {
      state.playlistObj = action.payload;
      return state;
    },
    setPlaylists(state, action) {
      state.playlists = action.payload;
      return state;
    },
  },
});
export const likedAction = likedVideosSlice.actions;
export const playlistAction = playlistSlice.actions;
export const watchLaterAction = watchLaterSlice.actions;
export const historyAction = historySlice.actions;

export const store = configureStore({
  reducer: {
    likedVideos: likedVideosSlice.reducer,
    playlist: playlistSlice.reducer,
    watchLater: watchLaterSlice.reducer,
    history: historySlice.reducer,
  },
});
