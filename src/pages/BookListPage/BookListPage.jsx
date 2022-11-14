import React, {useEffect} from "react";
import {Categories} from "../../components/Categories/Categories";
import {Books} from "../../components/Books/Books";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectCategories} from "../../store/category/selectors";
import {loadCategoryIfNotExist} from "../../store/category/loadCategoryIfNotExist";
import {useParams} from "react-router-dom";

export function BookListPage() {
    const {categoryId} = useParams();
    const dispatch = useDispatch();
    const categories = useSelector((state) => selectCategories(state));

    useEffect(() => {
        dispatch(loadCategoryIfNotExist);
    }, []);

    return (
        <main className={styles.mainContent}>
            <Categories categories={categories}/>
            {categories.length > 0 && categoryId && <Books categoryId={categoryId}/>}
        </main>
    );
}
