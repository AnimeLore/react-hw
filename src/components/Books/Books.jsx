import React from "react";
import styles from "./styles.module.css";
import { Book } from "../Book/Book";

export function Books(props) {
  return (
    <section className={styles.booksContainer}>
      {props.category.books.map((book) => (
        <Book key={book.id} book={book} adaptiveHeight={false} />
      ))}
    </section>
  );
}
