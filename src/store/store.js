import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from "../services/API";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]:baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
setupListeners(store.dispatch);

export default store;