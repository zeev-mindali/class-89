


//single reducer
//export const store = createStore(CarReducer)

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { carReducer } from "./CarReducer";


const reducers = combineReducers({CarState:carReducer});
export const store = configureStore({reducer:reducers});