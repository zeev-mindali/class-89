//npm i redux, npm i @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";
import { SongReducer } from "./SongReducer";
import { CategoriesReducer } from "./CategoriesReducer";

//choose all reducers....
const reducers = { songs: SongReducer, categories: CategoriesReducer };

//combine reducers.
export const youtube = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }), //do not look on serialization errors
});
