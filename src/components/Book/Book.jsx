import React, { useState } from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { ReactComponent as PlusSvg } from "./Plus.svg";
import { ReactComponent as MinusSvg } from "./Minus.svg";
const countRating = (reviews) => {
  let n = 0;
  for (let i = 0; i < reviews.length; i++) {
    n = n + reviews[i].rating;
  }
  let ratingReturn = Math.round(Number(n / reviews.length));
  return [ratingReturn, 5 - ratingReturn];
};
const minusCount = (setCount, count) => {
  if (count > 0) {
    setCount(count - 1);
  }
};
const plusCount = (setCount, count) => {
  if (count < 10) {
    setCount(count + 1);
  }
};
export function Book(props) {
  const [count, setCount] = useState(0);
  return (
    <section
      className={classnames(styles.bookContainer, {
        [styles.adaptiveHeight]: props.adaptiveHeight,
      })}
    >
      <div className={styles.bookShortDesc}>
        <strong className={styles.bookTitle}>{props.book.title}</strong>
        <div className={styles.descText}>
          <div>{props.book.author}</div>
          <div>{props.book.genre}</div>
          <div className={styles.stars}>
            {"★".repeat(countRating(props.book.reviews)[0]) +
              "☆".repeat(countRating(props.book.reviews)[1])}
          </div>
        </div>
        <b className={styles.bookPrice}>{props.book.price} ₽</b>
      </div>
      <div
        className={classnames(styles.amountSelect, {
          [styles.amountBottom]: props.adaptiveHeight,
        })}
      >
        <button
          onClick={() => {
            minusCount(setCount, count);
          }}
          className={classnames(styles.buttonOn, {
            [styles.buttonOff]: !count,
          })}
        >
          <MinusSvg />
        </button>
        <div>
          <span className={styles.counterText}>{count}</span>
        </div>
        <button
          onClick={() => {
            plusCount(setCount, count);
          }}
          className={classnames(styles.buttonOn, {
            [styles.buttonOff]: count > 9,
          })}
        >
          <PlusSvg />
        </button>
      </div>
    </section>
  );
}
