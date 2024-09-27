import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit";
import { shoeSlice } from "./shoeSlice";
let mainReducer = combineReducers({
shoeSlice : shoeSlice.reducer
});

// configureStore aapko store banakar dega

export let mainStore =  configureStore({
    reducer:mainReducer
});