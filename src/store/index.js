import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {categorySlice} from "./category";
import {bookSlice} from "./book";
import {cartSlice} from "./cart";
import {reviewSlice} from "./review";

export const store = configureStore({
    reducer: combineReducers({
        category: categorySlice.reducer,
        book: bookSlice.reducer,
        cart: cartSlice.reducer,
        review: reviewSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
