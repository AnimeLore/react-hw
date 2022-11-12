import React from "react";
import {Books} from "../../components/Books/Books";
import styles from "./styles.module.css";
import {Cart} from "../../components/Cart/Cart";

export function CartPage() {
    return (
        <main className={styles.mainContent}>
            <Cart/>
            <Books cart={true}/>
        </main>
    );
}
