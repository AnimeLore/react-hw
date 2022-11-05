import React from "react";
import styles from "./styles.module.css";

export function Review(props) {
  return (
    <section className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <strong>{props.review.name}</strong>
        <div className={styles.stars}>
          {"★".repeat(props.review.rating) +
            "☆".repeat(5 - props.review.rating)}
        </div>
      </div>
      <div className={styles.reviewText}>
        <span>{props.review.text}</span>
      </div>
    </section>
  );
}
