import React from "react";
import styles from "./styles.module.css";
import { Review } from "../Review/Review";

export function Reviews(props) {
  return (
    <div className={styles.reviewsContainer}>
      {props.book.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
