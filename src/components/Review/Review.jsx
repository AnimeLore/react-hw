import React from "react";
import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../store/review/selectors";

export function Review(props) {
    const review = useSelector(state => selectReviewById(state, props.bookId));

    if (!review) {
        return null;
    }
    return (
        <section className={styles.reviewContainer}>
            <div className={styles.reviewHeader}>
                <strong>{review.name}</strong>
                <div className={styles.stars}>
                    {"★".repeat(review.rating) +
                        "☆".repeat(5 - review.rating)}
                </div>
            </div>
            <div className={styles.reviewText}>
                <span>{review.text}</span>
            </div>
        </section>
    );
}
