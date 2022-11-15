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

	// initial load
	useEffect(() => {
		setSelectedProducts(products);
	}, [products]);

	useEffect(() => {
		// pick specific products with selected categories
		const sProducts = products.filter((item) => {
			return selectedCategories.some((cat) => item.category.includes(cat));
		});

		setSelectedProducts(sProducts);

		// if no filter is selected
		if (selectedCategories.length === 0) {
			setSelectedProducts(products)
		}
	}, [products, selectedCategories]);

	return (
		<>
			<MainListHeader />
			<div className="flex justify-between">
				<MainListFiltering
					products={products}
					categoryHandler={categoryHandler}
				/>
				<MainListItems products={selectedProducts} />
			</div>
		</>
	);
};

export default MainList;
