import React, {useEffect, useMemo} from "react";
import styles from "./styles.module.css";
import {Book} from "../Book/Book";
import {useDispatch, useSelector} from "react-redux";
import {loadBooksIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {selectIsBooksLoading} from "../../store/book/selectors";
import {selectCategoriesBookIds} from "../../store/category/selectors";
import {selectCartBooks} from "../../store/cart/selectors";

export function Books({categoryId}) {
	const dispatch = useDispatch();
	useEffect(() => {
		if (categoryId !== undefined) {
			dispatch(loadBooksIfNotExist(categoryId));
		}
	}, [categoryId, dispatch]);
	const books = useSelector((state) => {
			if (categoryId !== undefined) {
				return selectCategoriesBookIds(state, categoryId);
			} else {
				return Object.keys(selectCartBooks(state));
			}
		}
	);
	const isLoading = useSelector((state) => selectIsBooksLoading(state));
	const bookList = useMemo(() =>
			books.map((id) => {
				return <Book key={id} bookId={id} adaptiveHeight={false}/>
			})
		, [books])
	if (isLoading) {
		return <span>Загрузка книг...</span>;
	}


	return (
		<section className={styles.booksContainer}>
			{(books && books.length > 0) &&
				bookList}
		</section>
	);
}
