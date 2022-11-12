import React, {useEffect} from "react";
import {Book} from "../../components/Book/Book";
import {Annotation} from "../../components/Annotation/Annotation";
import {Reviews} from "../../components/Reviews/Reviews";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectBooks,} from "../../store/book/selectors";
import {useParams} from "react-router-dom";
import {loadBookIfNotExist} from "../../store/book/loadBookIfNotExist";

export function BookDescPage() {
    const {bookId} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBookIfNotExist(bookId));
    }, [bookId, dispatch]);
    const books = useSelector((state) => selectBooks(state));
    return (
        <main className={styles.mainContent}>
            <div className={styles.upperContainer}>
                {books.length > 0 && bookId && (
                    <>
                        <Book bookId={bookId} adaptiveHeight={true}/>
                        <Annotation bookId={bookId}/>
                    </>
                )}
            </div>
            {books.length > 0 && bookId && <Reviews bookId={bookId}/>}
        </main>
    );
}
