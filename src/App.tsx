import React from "react";

import Layout from "./components/Layout/Layout";
import Header from "./components/Layout/Header";
import MainList from "./components/Layout/MainList/MainList";
import useProducts from "./hooks/products";

function App() {
	const { items } = useProducts();

	return (
		<Layout>
			<Header />
			{/* todo: display a featured product */}
			{/* Featured */}
			<MainList products={items} />
		</Layout>
	);
}

export default App;
