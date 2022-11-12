import {reviewSlice} from "./index";
import {prepareData} from "../utils";

export const loadReviewIfNotExist = (bookId) => (dispatch, getState) => {
    dispatch(reviewSlice.actions.startLoading(undefined));
    fetch(`http://localhost:3001/api/reviews?id=${bookId}`)
        .then((response) => response.join())
        .then(categories => {
            dispatch(reviewSlice.actions.successLoading(prepareData(categories)))
        }).catch(() => {
        dispatch(reviewSlice.actions.failLoading(undefined));
    });
};
