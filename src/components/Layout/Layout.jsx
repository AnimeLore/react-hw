import React from "react";
import { ReactComponent as CartSvg } from "./cart.svg";
import styles from "./styles.module.css";

export const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <header>
        <div className={styles.header}>
          <span className={styles.headerText}>Магазин</span>
          <CartSvg className={styles.headerCart} />
        </div>
      </header>
      <div className={styles.mainContent}>{props.children}</div>
    </div>
  );
};
