import React from "react";
import { Book } from "../../components/Book/Book";
import { Annotation } from "../../components/Annotation/Annotation";
import { Reviews } from "../../components/Reviews/Reviews";
import styles from "./styles.module.css";

export function BookDescPage(props) {
  return (
    <main className={styles.mainContent}>
      <div className={styles.upperContainer}>
        <Book book={props.categories[2].books[0]} adaptiveHeight={true} />
        <Annotation book={props.categories[2].books[0]} />
      </div>
      <Reviews book={props.categories[2].books[0]} />
    </main>
  );
}
