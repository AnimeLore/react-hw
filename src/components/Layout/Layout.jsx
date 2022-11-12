import React from "react";
import {ReactComponent as CartSvg} from "./cart.svg";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";

export const Layout = (props) => {
    return (
        <div className={styles.layout}>
            <header>
                <div className={styles.header}>
                    <Link className={styles.linkNormalize} to="/category">
                        <span className={styles.headerText}>Магазин</span>
                    </Link>
                    <Link className={styles.linkNormalize} to="/cart"><CartSvg
                        className={styles.headerCart}/></Link>
                </div>
            </header>
            <div className={styles.mainContent}>{props.children}</div>
        </div>
    );
};
