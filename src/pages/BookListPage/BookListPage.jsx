import React, {useEffect, useState} from "react";
import {Categories} from "../../components/Categories/Categories";
import {Books} from "../../components/Books/Books";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectCategories} from "../../store/category/selectors";
import {loadCategoryIfNotExist} from "../../store/category/loadCategoryIfNotExist";

export function BookListPage(props) {
	const dispatch = useDispatch();
	const categories = useSelector(state => selectCategories(state))
	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	useEffect(()=>{
		dispatch(loadCategoryIfNotExist);
	}, []);

	return (
		<main className={styles.mainContent}>
			<Categories
				categories={categories}
				currentCategory={currentCategory}
				changeCategory={setCurrentCategory}
			/>
			<Books categoryId={currentCategory.id}/>
		</main>
	);
}
