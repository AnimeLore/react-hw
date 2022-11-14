import React from 'react';
import {useSelector} from "react-redux";
import {selectCartBooks} from "../../store/cart/selectors";
import {selectBookModule} from "../../store/book/selectors";

export function PriceCounter() {
	const cart = useSelector(state => selectCartBooks(state));
	const books = useSelector((state) => selectBookModule(state));
	let price = 0;
	Object.keys(cart).map((key, index) => {
		let val = cart[key];
		price += books.entities[key].price * val;
	});
	return (
		<span>Итого: {price} ₽</span>
	)
}