import React from "react";
import styles from "./styles.module.css";
import {Category} from "../Category/Category";
import classnames from "classnames";
import {NavLink} from "react-router-dom";

export function Categories(props) {
    const categories = props.categories;
    return (
        <section className={styles.categoriesContainer}>
            <ul className={styles.categoriesList}>
                {categories.map((category) => (
                    <li key={category.id} className={styles.categoriesElement}>
                        <NavLink
                            to={category.id}
                            key={category.id}
                            className={({isActive}) =>
                                classnames(
                                    styles.linkMain,
                                    {
                                        [styles.linkCurrent]: isActive,
                                    },
                                    styles.linkNormalize
                                )
                            }
                        >
                            <Category key={category.id} category={category}/>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}
