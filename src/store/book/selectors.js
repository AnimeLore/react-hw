import {Statuses} from "../../constants/statuses";
import {selectCategoryModule} from "../category/selectors";

export const selectBookModule = (state) => state.book;

export const selectBooks = (state) => Object.values(selectBookModule(state).entities)

export const selectBookById = (state, bookId) => selectBookModule(state).entities[bookId];

export const selectIsBooksLoading = (state) => selectBookModule(state).status === Statuses.inProgress;

export const selectBooksReviewIds = (state, bookId) => selectCategoryModule(state).entities[bookId].reviews;
