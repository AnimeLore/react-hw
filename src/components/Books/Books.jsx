import React, { memo, useEffect } from "react";
import styles from "./styles.module.css";
import {Book} from "../Book/Book";
import {useDispatch, useSelector} from "react-redux";
import {loadBooksIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {selectIsBooksLoading} from "../../store/book/selectors";
import {selectCategoriesBookIds} from "../../store/category/selectors";
import {selectCartBooks} from "../../store/cart/selectors";

function Books({categoryId, cart}) {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!cart) {
            dispatch(loadBooksIfNotExist(categoryId));
        }
    }, [cart, categoryId, dispatch]);
    const books = useSelector((state) => {
            if (!cart) {
                return selectCategoriesBookIds(state, categoryId);
            } else {
                return Object.keys(selectCartBooks(state));
            }
        }
    );
    // console.log(books)
    const isLoading = useSelector((state) => selectIsBooksLoading(state));

    if (isLoading) {
        return <span>Загрузка книг...</span>;
    }
    return (
        <section className={styles.booksContainer}>
            {/* map */}
            {(books && books.length > 0) &&
                books.map((id) => <Book key={id} bookId={id} adaptiveHeight={false}/>)}
        </section>
    );
}

export default memo(Books)
