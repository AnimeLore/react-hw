import React, {useMemo} from "react";
import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectCartBooks} from "../../store/cart/selectors";
import {CartItem} from "../CartItem/CartItem";
import {PriceCounter} from "../PriceCounter/PriceCounter";

export function Cart() {
	const cart = useSelector(state => selectCartBooks(state));
	const cartItems = useMemo(() =>
			Object.keys(cart).map((cartItem) => {
				return (
					<li key={cartItem} className={styles.cartElement}>
						<CartItem key={cartItem} bookId={cartItem}/>
					</li>
				)
			}), [cart])
	return (
		<section className={styles.cartContainer}>
			<div className={styles.wrapper}>
				<span className={styles.cartTitle}>Ваш заказ:</span>
				<ul className={styles.cartList}>
					{cartItems}
				</ul>
			</div>
			<div className={styles.footerContainer}>
				<PriceCounter className={styles.totalPrice}/>
				<button onClick={() => {
					/* eslint-disable-next-line no-restricted-globals */
					location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
				}} className={styles.buyButton}>Купить
				</button>
			</div>
		</section>
	);
}
