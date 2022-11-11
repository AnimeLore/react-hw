import {categorySlice} from "./index";

export const loadCinemaIfNotExist = (dispatch, getState) => {
	fetch('http://localhost:3001/api/categories')
		.then((response) => response.join())
		.then(categories => {
			dispatch(categorySlice.actions.successLoading())
		}).catch(()=>{

	})
};