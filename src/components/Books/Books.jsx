import React, {useEffect} from "react";
import styles from "./styles.module.css";
import {Book} from "../Book/Book";
import {useDispatch, useSelector} from "react-redux";
import {loadBookIfNotExist} from "../../store/book/loadBookIfNotExist";
import {selectIsBooksLoading} from "../../store/book/selectors";
import {selectCategoriesBookIds} from "../../store/category/selectors";

export function Books(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBookIfNotExist(props.categoryId))
    }, [props.categoryId])
    const books = useSelector(state => selectCategoriesBookIds(state, props.categoryId))
    const isLoading = useSelector(state => selectIsBooksLoading(state))

    if (isLoading) {
        return <span>Загрузка книг...</span>
    }

    return (
        <section className={styles.booksContainer}>
            {books.map((id) => (
                <Book key={id} bookId={id} adaptiveHeight={false}/>
            ))}
        </section>
    );
}
