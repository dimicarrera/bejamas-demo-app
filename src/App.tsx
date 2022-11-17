import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header";
import FeaturedItem from "./components/Layout/FeaturedItem/FeaturedItem";
import MainList from "./components/Layout/MainList/MainList";
import CartDropdown from "./components/Layout/CartDropdown";

import useProducts from "./hooks/products";
import { IProduct, ICartItem } from "./models";

function App() {
	const [cartItems, setCartItems] = useState<ICartItem[]>([]);
	const [displayCart, setDisplayCart] = useState(false);

	const { items } = useProducts();

	const featured: IProduct[] = items.filter((item) => item.featured === true);

	const addToCart = (item: ICartItem) => {
		setCartItems([...cartItems, item]);
		setDisplayCart(true);
	};

	const clearCart = () => {
		setCartItems([]);
		closeDropdown();
	};

	const openDropdown = () => {
		setDisplayCart(true);
	};

	const closeDropdown = () => {
		setDisplayCart(false);
	};

	return (
		<Layout>
			<Header
				cartItems={cartItems}
				openDropdown={openDropdown}
			/>
			{displayCart && (
				<CartDropdown
					clearCart={clearCart}
					cartItems={cartItems}
					closeDropdown={closeDropdown}
				/>
			)}
			<FeaturedItem
				featured={featured}
				addToCart={addToCart}
			/>
			<MainList
				products={items}
				addToCart={addToCart}
			/>
		</Layout>
	);
}

export default App;
