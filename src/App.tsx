import React from "react";

import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header";
import FeaturedItem from "./components/Layout/FeaturedItem/FeaturedItem";
import MainList from "./components/Layout/MainList/MainList";

import useProducts from "./hooks/products";
import { IProduct } from "./models";

function App() {
	const { items } = useProducts();
	const featured: IProduct[] = items.filter((item) => item.featured === true);

	return (
		<Layout>
			<Header />
			<FeaturedItem featured={featured} />
			<MainList products={items} />
		</Layout>
	);
}

export default App;
