/** @format */

import { createStore, combineReducers } from "redux";
import DndReducer from "./DndReducer";

const reducers = combineReducers({ DndReducer });
export const store = createStore(reducers);
