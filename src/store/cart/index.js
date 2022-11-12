import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        addBook: (state, action) => {
            state[action.payload] = (state[action.payload] || 0) + 1;
        },
        removeBook: (state, action) => {
            state[action.payload] =
                state[action.payload] === 0 ? 0 : state[action.payload] - 1;
        },
    },
});
