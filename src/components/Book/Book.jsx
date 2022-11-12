import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import {ReactComponent as PlusSvg} from "./Plus.svg";
import {ReactComponent as MinusSvg} from "./Minus.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";
import {cartSlice} from "../../store/cart";
import {selectBookCount} from "../../store/cart/selectors";

const countRating = (reviews) => {
    let n = 0;
    for (let i = 0; i < reviews.length; i++) {
        n = n + reviews[i].rating;
    }
    let ratingReturn = Math.round(Number(n / reviews.length));
    return [ratingReturn, 5 - ratingReturn];
};

export function Book(props) {
    const dispatch = useDispatch();
    const book = useSelector(state => selectBookById(state, props.bookId));
    const count = useSelector(state => selectBookCount(state, book.id));

    if (!book) {
        return null;
    }

    return (
        <section
            className={classnames(styles.bookContainer, {
                [styles.adaptiveHeight]: props.adaptiveHeight,
            })}
        >
            <div className={styles.bookShortDesc}>
                <strong className={styles.bookTitle}>{props.book.title}</strong>
                <div className={styles.descText}>
                    <div>{book.author}</div>
                    <div>{book.genre}</div>
                    <div className={styles.stars}>
                        {"★".repeat(countRating(book.reviews)[0]) +
                            "☆".repeat(countRating(book.reviews)[1])}
                    </div>
                </div>
                <b className={styles.bookPrice}>{book.price} ₽</b>
            </div>
            <div
                className={classnames(styles.amountSelect, {
                    [styles.amountBottom]: props.adaptiveHeight,
                })}
            >
                <button
                    onClick={() => {
                        dispatch(cartSlice.actions.removeBook(book.id))
                    }}
                    className={classnames(styles.buttonOn, {
                        [styles.buttonOff]: !count,
                    })}
                >
                    <MinusSvg/>
                </button>
                <div>
                    <span className={styles.counterText}>{count || 0}</span>
                </div>
                <button
                    onClick={() => {
                        dispatch(cartSlice.actions.addBook(book.id))
                    }}
                    className={classnames(styles.buttonOn, {
                        [styles.buttonOff]: count > 9,
                    })}
                >
                    <PlusSvg/>
                </button>
            </div>
        </section>
    );
}
