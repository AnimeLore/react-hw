import React from "react";
import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";

export function Annotation(props) {
    const book = useSelector((state) => selectBookById(state, props.bookId));
    if (!book) {
        return null;
    }
    return (
        <section className={styles.annotationContainer}>
            <strong className={styles.annotationTitle}>Аннотация</strong>
            <div className={styles.annotationText}>
                <span>{book.annotation}</span>
            </div>
        </section>
    );
}
