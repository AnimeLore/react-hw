import {createSlice} from "@reduxjs/toolkit";
import {Statuses} from "../../constants/statuses";

const initialState = {
    entities: {},
    ids: [],
    status: Statuses.idle
}

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.status = Statuses.inProgress;
        },
        successLoading: (state, action) => {
            state.status = Statuses.success;
            state.entities = {...state.entities, ...action.payload.entities};
            state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
        },
        failLoading: (state) => {
            state.status = Statuses.failed;
        },
    }
});
