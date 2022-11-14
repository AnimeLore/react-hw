import React, {useMemo} from "react";
import styles from "./styles.module.css";
import {Category} from "../Category/Category";
import classnames from "classnames";
import {NavLink} from "react-router-dom";

export function Categories(props) {
	const categories = props.categories;
	const categoryList = useMemo(() =>
		categories.map((category) => {
			return (
				<li key={category.id} className={styles.categoriesElement}>
					<NavLink
						to={category.id}
						key={category.id}
						className={({isActive}) =>
							classnames(
								styles.linkMain,
								{
									[styles.linkCurrent]: isActive,
								},
								styles.linkNormalize
							)
						}
					>
						<Category key={category.id} category={category}/>
					</NavLink>
				</li>
			)
		})

	, [categories]);
	console.log(categoryList)
	return (
		<section className={styles.categoriesContainer}>
			<ul className={styles.categoriesList}>
				{categoryList}
			</ul>
		</section>
	);
}
