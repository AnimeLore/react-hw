import React, {useEffect} from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import {ReactComponent as PlusSvg} from "./Plus.svg";
import {ReactComponent as MinusSvg} from "./Minus.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";
import {cartSlice} from "../../store/cart";
import {selectBookCount} from "../../store/cart/selectors";
import {Link} from "react-router-dom";
import {loadReviewIfNotExist} from "../../store/review/loadReviewIfNotExist";
import {selectReviewModule} from "../../store/review/selectors";
import {Statuses} from "../../constants/statuses";

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
    const book = useSelector((state) => selectBookById(state, props.bookId));
    const count = useSelector((state) => selectBookCount(state, props.bookId));
    useEffect(() => {
        dispatch(loadReviewIfNotExist(props.bookId));
    }, [props.bookId, dispatch]);

    const reviewAll = useSelector((state) => selectReviewModule(state));

    if (!book || reviewAll.status === Statuses.failed) {
        return null;
    }
    const reviews = (reviewAll.entities.length === 0 && reviewAll.entities.status === Statuses.success) ? undefined : book.reviews.map((id) => {
        return reviewAll.entities[id];
    });

    return (
        <section
            className={classnames(styles.bookContainer, {
                [styles.adaptiveHeight]: props.adaptiveHeight,
            })}
        >
            <div className={styles.bookShortDesc}>
                <Link className={styles.linkNormalize} to={`/book/${props.bookId}`}>
                    <strong className={styles.bookTitle}>{book.title}</strong>
                </Link>
                <div className={styles.descText}>
                    <div>{book.author}</div>
                    <div>{book.genre}</div>
                    <div className={styles.stars}>
                        {(reviews) && "★".repeat(countRating(reviews)[0]) +
                            "☆".repeat(countRating(reviews)[1])}
                    </div>
                </div>
                <b className={styles.bookPrice}>{book.price} ₽</b>
            </div>
            {/* Счётчик */}
            <div
                className={classnames(styles.amountSelect, {
                    [styles.amountBottom]: props.adaptiveHeight,
                })}
            >
                <button
                    onClick={() => {
                        dispatch(cartSlice.actions.removeBook(book.id));
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
                        dispatch(cartSlice.actions.addBook(book.id));
                    }}
                    className={classnames(styles.buttonOn, {
                        [styles.buttonOff]: count > 9,
                    })}
                    disabled={count > 9}
                >
                    <PlusSvg/>
                </button>
            </div>
        </section>
    );
}
