import React from "react";
import styles from "./styles.module.css";

export function Annotation(props) {
  return (
    <section className={styles.annotationContainer}>
      <strong className={styles.annotationTitle}>Аннотация</strong>
      <div className={styles.annotationText}>
        <span>{props.book.annotation}</span>
      </div>
    </section>
  );
}
