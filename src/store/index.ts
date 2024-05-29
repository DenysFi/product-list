import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./products";
import comments from "./comments";


const rootReducer = combineReducers({
    products,
    comments
})

export const store = configureStore(
    {
        reducer: rootReducer
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;