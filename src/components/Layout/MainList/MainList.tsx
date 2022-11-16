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
	const [selectedSorting, setSelectedSorting] = useState("price");
	const [sortingDirection, setSortingDirection] = useState("");

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

	const sortingDirectionHandler = (value: string) => {
		console.log(sortingDirection, "sortingDirection in fn");
		setSortingDirection(value);
	};

	const sortingTypeHandler = (value: string) => {
		setSelectedSorting(value);
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
				(item) =>
					selectedRange[0] <= item.price && item.price <= selectedRange[1]
			);

		setSelectedProducts(filteredProducts);

		// if no filter is selected
		if (selectedCategories.length === 0) {
			setSelectedProducts(products);
		}
	}, [products, selectedCategories, selectedRange]);

	useEffect(() => {
		let sorted: IProduct[] = [];
		switch (true) {
			case selectedSorting === "price" && sortingDirection === "asc":
				sorted = selectedProducts.sort((a, b) => a.price - b.price);
				setSelectedProducts([...sorted]);
				break;
			case selectedSorting === "price" && sortingDirection === "desc":
				sorted = selectedProducts.sort((a, b) => b.price - a.price);
				setSelectedProducts([...sorted]);
				break;
			case selectedSorting === "name" && sortingDirection === "asc":
				sorted = selectedProducts.sort((a, b) => a.name.localeCompare(b.name));
				setSelectedProducts([...sorted]);
				break;
			case selectedSorting === "name" && sortingDirection === "desc":
				sorted = selectedProducts.sort((a, b) => b.name.localeCompare(a.name));
				setSelectedProducts([...sorted]);
				break;

			default:
				break;
		}
	}, [selectedSorting, sortingDirection]);

	return (
		<section className="my-10">
			<MainListHeader
				sortingTypeHandler={sortingTypeHandler}
				sortingDirectionHandler={sortingDirectionHandler}
			/>
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
