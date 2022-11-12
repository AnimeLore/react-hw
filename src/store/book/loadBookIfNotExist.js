import {bookSlice} from "./index";
import {prepareData} from "../utils";

export const loadBookIfNotExist = (categoryId) => (dispatch, getState) => {
    dispatch(bookSlice.actions.startLoading(undefined));
    fetch(`http://localhost:3001/api/books?id=${categoryId}`)
        .then((response) => response.join())
        .then(categories => {
            dispatch(bookSlice.actions.successLoading(prepareData(categories)))
        }).catch(() => {
        dispatch(bookSlice.actions.failLoading(undefined));
    });
};
