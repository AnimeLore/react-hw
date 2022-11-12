import React, {useEffect} from "react";
import styles from "./styles.module.css";
import {Book} from "../Book/Book";
import {useDispatch, useSelector} from "react-redux";
import {loadBooksIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {selectIsBooksLoading} from "../../store/book/selectors";
import {selectCategoriesBookIds} from "../../store/category/selectors";

export function Books({categoryId}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksIfNotExist(categoryId));
    }, [categoryId, dispatch]);
    const books = useSelector((state) =>
        selectCategoriesBookIds(state, categoryId)
    );
    const isLoading = useSelector((state) => selectIsBooksLoading(state));

    if (isLoading) {
        return <span>Загрузка книг...</span>;
    }
    return (
        <section className={styles.booksContainer}>
            {books &&
                books.map((id) => <Book key={id} bookId={id} adaptiveHeight={false}/>)}
        </section>
    );
}
