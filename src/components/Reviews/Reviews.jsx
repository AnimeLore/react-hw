import React, {useEffect} from "react";
import styles from "./styles.module.css";
import {Review} from "../Review/Review";
import {useDispatch, useSelector} from "react-redux";
import {selectBooksReviewIds} from "../../store/book/selectors";
import {selectIsReviewsLoading,} from "../../store/review/selectors";
import {loadReviewIfNotExist} from "../../store/review/loadReviewIfNotExist";

export function Reviews(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadReviewIfNotExist(props.bookId));
    }, [props.bookId, dispatch]);

    const reviews = useSelector((state) =>
        selectBooksReviewIds(state, props.bookId)
    );
    const isLoading = useSelector((state) => selectIsReviewsLoading(state));
    if (isLoading) {
        return <span>Загрузка отзывов...</span>;
    }
    return (
        <div className={styles.reviewsContainer}>
            {reviews && reviews.map((id) => <Review key={id} reviewId={id}/>)}
        </div>
    );
}
