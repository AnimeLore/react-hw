import {bookSlice} from "./index";
import {prepareData} from "../utils";

export const loadBookIfNotExist = (bookId) => (dispatch, getState) => {
    dispatch(bookSlice.actions.startLoading(undefined));
    fetch(`http://localhost:3001/api/books?bookId=${bookId}`)
        .then((response) => response.json())
        .then((categories) => {
            dispatch(bookSlice.actions.successLoading(prepareData(categories)));
        })
        .catch(() => {
            dispatch(bookSlice.actions.failLoading(undefined));
        });
};
