import React from "react";
import styles from "./styles.module.css";
import { Category } from "../Category/Category";

export function Categories(props) {
  return (
    <section className={styles.categoriesContainer}>
      <ul className={styles.categoriesList}>
        {props.categories.map((category) => (
          <li
            key={category.id}
            onClick={() => props.changeCategory(category)}
            className={styles.categoriesElement}
          >
            <Category
              key={category.id}
              category={category}
              active={category === props.currentCategory}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
