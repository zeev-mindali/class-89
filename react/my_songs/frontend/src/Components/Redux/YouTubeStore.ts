//npm i redux, npm i @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";
import { SongReducer } from "./SongReducer";

//choose all reducers....
const reducers = { songs: SongReducer };

//combine reducers.
export const youtube = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});


