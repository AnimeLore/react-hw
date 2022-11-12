import React from "react";
import {useSelector} from "react-redux";
import styles from './styles.module.css';
import {selectBookById} from "../../store/book/selectors";
import {selectBookCount} from "../../store/cart/selectors";

export function CartItem({bookId}) {
    const book = useSelector((state) => selectBookById(state, bookId));
    const count = useSelector((state) => selectBookCount(state, bookId));
    if (!book) {
        return null;
    }
    return (
        <div className={styles.itemContainer}>
            <span className={styles.bookName}>{book.title}</span>
            <span className={styles.bookPrice}>{book.price * count} ₽</span>
        </div>
    );
}
