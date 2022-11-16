import React, { useState, useEffect } from "react";

import MainListHeader from "./MainListHeader";
import MainListFiltering from "./MainListFiltering";
import MainListItems from "./MainListItems";

import { IProduct } from "../../../models";

export type MainListProps = {
	products: IProduct[];
};

const MainList = ({ products }: MainListProps) => {
	const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [selectedRange, setSelectedRange] = useState<number[]>([0, Infinity]);
	// todo: add sorting

	const categoryHandler = (cat: string) => {
		// add selected category to the list
		setSelectedCategories((selectedCategories) => [...selectedCategories, cat]);
		// if selected category is already there
		if (selectedCategories.includes(cat)) {
			// delete it from the list
			setSelectedCategories(
				[...selectedCategories].filter((item) => item !== cat)
			);
		}
	};

	const priceRangeHandler = (idx: number) => {
		if (idx === 0) setSelectedRange([0, 20]);
		if (idx === 1) setSelectedRange([20, 100]);
		if (idx === 2) setSelectedRange([100, 200]);
		if (idx === 3) setSelectedRange([200, Infinity]);
	};

	// initial load
	useEffect(() => {
		setSelectedProducts(products);
	}, [products]);

	useEffect(() => {
		// pick specific products with selected categories
		const filteredProducts = products
			.filter((item) =>
				selectedCategories.some((cat) => item.category.includes(cat))
			)
			.filter(
				(item) => selectedRange[0] < item.price && item.price < selectedRange[1]
			);

		setSelectedProducts(filteredProducts)

		// if no filter is selected
		if (selectedCategories.length === 0) {
			setSelectedProducts(products);
		}
	}, [products, selectedCategories, selectedRange]);

	return (
		<section>
			<MainListHeader />
			<div className="flex justify-between">
				<MainListFiltering
					products={products}
					categoryHandler={categoryHandler}
					priceRangeHandler={priceRangeHandler}
				/>
				<MainListItems products={selectedProducts} />
			</div>
		</section>
	);
};

export default MainList;
