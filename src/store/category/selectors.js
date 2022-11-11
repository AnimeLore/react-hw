export const selectCategoryModule = (state) => state.category;

export const selectCategories = (state) => Object.keys(selectCategoryModule(state).entities)