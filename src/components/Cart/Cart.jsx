import React from "react";
import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectCartBooks} from "../../store/cart/selectors";
import CartItem from "../CartItem/CartItem";
import {selectBookModule} from "../../store/book/selectors";

export function Cart() {
    const cart = useSelector(state => selectCartBooks(state));
    const books = useSelector((state) => selectBookModule(state));
    let price = 0;
    Object.keys(cart).map((key, index) => {
        let val = cart[key];
        price += books.entities[key].price * val;
    });
    return (
        <section className={styles.cartContainer}>
            <div className={styles.wrapper}>
                <span className={styles.cartTitle}>Ваш заказ:</span>
                <ul className={styles.cartList}>
                    {/* map */}
                    {Object.keys(cart).map((cartItem) => (
                        <li key={cartItem} className={styles.cartElement}>
                            <CartItem key={cartItem} bookId={cartItem}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.footerContainer}>
                <span className={styles.totalPrice}>Итого: {price} ₽</span>

                <button onClick={() => {
                    /* eslint-disable-next-line no-restricted-globals */
                    location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                }} className={styles.buyButton}>Купить
                </button>
            </div>
        </section>
    );
}
