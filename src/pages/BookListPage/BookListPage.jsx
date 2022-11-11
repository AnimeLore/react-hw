import React, {useState} from "react";
import {Categories} from "../../components/Categories/Categories";
import {Books} from "../../components/Books/Books";
import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectCategories} from "../../store/category/selectors";

export function BookListPage(props) {
	const categories = useSelector(state => selectCategories(state))
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	return (
		<main className={styles.mainContent}>
			<Categories
				categories={categories}
				currentCategory={currentCategory}
				changeCategory={setCurrentCategory}
			/>
			<Books category={currentCategory}/>
		</main>
	);
}
