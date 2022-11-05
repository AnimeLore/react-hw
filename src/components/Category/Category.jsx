import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export function Category(props) {
  return (
    <span
      className={classnames(styles.linkMain, {
        [styles.linkCurrent]: props.active,
      })}
    >
      {props.category.name}
    </span>
  );
}
