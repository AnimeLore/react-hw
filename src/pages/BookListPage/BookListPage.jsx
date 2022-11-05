import React, { useState } from "react";
import { Categories } from "../../components/Categories/Categories";
import { Books } from "../../components/Books/Books";
import styles from "./styles.module.css";

export function BookListPage(props) {
  const [currentCategory, setCurrentCategory] = useState(props.categories[0]);
  return (
    <main className={styles.mainContent}>
      <Categories
        categories={props.categories}
        currentCategory={currentCategory}
        changeCategory={setCurrentCategory}
      />
      <Books category={currentCategory} />
    </main>
  );
}
