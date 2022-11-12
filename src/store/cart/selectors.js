export const selectCartModule = (state) => state.cart;

export const selectBookCount = (state, bookId) =>
    selectCartModule(state)[bookId];

export const selectCartBooks = (state) => Object.keys(selectCartModule(state))
    .filter(key => selectCartModule(state)[key] > 0)
    .reduce((res, key) => (res[key] = selectCartModule(state)[key], res), {});
