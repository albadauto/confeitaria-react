import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/data.slice";
import sliceLanguages from "./slices/sliceLanguages";


export const store = configureStore({
    reducer: {
        languages: sliceLanguages.reducer,
        data: dataSlice
    }
})