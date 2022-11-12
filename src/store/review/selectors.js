import {Statuses} from "../../constants/statuses";

export const selectReviewModule = (state) => state.review;

export const selectReviews = (state) => Object.values(selectReviewModule(state).entities)

export const selectReviewById = (state, reviewId) => selectReviewModule(state).entities[reviewId];

export const selectIsReviewsLoading = (state) => selectReviewModule(state).status === Statuses.inProgress;
