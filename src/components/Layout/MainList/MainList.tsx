import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import MainListHeader from "./MainListHeader";
import MainListFiltering from "./MainListFiltering";
import MainListItemCard from "./MainListItemCard";
import MainListPagination from "./MainListPagination";

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
	const [currentPage, setCurrentPage] = useState(1);

	// set up pagination
	const paginationItemsPerPage = 6;
	const lastItemIdx = currentPage * paginationItemsPerPage;
	const firstItemIdx = lastItemIdx - paginationItemsPerPage;
	const currentItems = selectedProducts.slice(firstItemIdx, lastItemIdx);
	const pagesCount = Math.ceil(
		selectedProducts.length / paginationItemsPerPage
	);

	const handlePageClick = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const handlePrevClick = () => {
		if (currentPage !== 1) {
			setCurrentPage((prev) => prev - 1);
		} else return;
	};

	const handleNextClick = () => {
		if (currentPage !== pagesCount) {
			setCurrentPage((prev) => prev + 1);
		} else return;
	};

	// set up category filter
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

	// set up price range filter
	const priceRangeHandler = (idx: number) => {
		if (idx === 0) setSelectedRange([0, 20]);
		if (idx === 1) setSelectedRange([20, 100]);
		if (idx === 2) setSelectedRange([100, 200]);
		if (idx === 3) setSelectedRange([200, Infinity]);
	};

	// set up sorting 
	const sortingDirectionHandler = (value: "asc" | "desc" | "") => { 
		setSortingDirection(value);
	};

	const sortingTypeHandler = (value: string) => {
		setSelectedSorting(value);
	};

	// initial load
	useEffect(() => {
		setSelectedProducts(products);
	}, [products]);

	// handle filtering effects
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

	// handle sorting effects
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedSorting, sortingDirection]);

	// scroll to the top when picking a page
	useEffect(() => {
		window.scrollTo({
			behavior: "smooth",
			top: 0,
		});
	}, [currentPage]);

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
				<div className="flex basis-8/12 flex-col">
					<div className="grid grid-cols-3 gap-8">
						{currentItems?.map((product) => (
							<MainListItemCard
								key={uuidv4()}
								product={product}
							/>
						))}
						{currentItems.length === 0 && (
							<p>No items available with your search criteria</p>
						)}
					</div>
					<MainListPagination
						pagesCount={pagesCount}
						currentPage={currentPage}
						handlePrevClick={handlePrevClick}
						handleNextClick={handleNextClick}
						handlePageClick={handlePageClick}
					/>
				</div>
			</div>
		</section>
	);
};

export default MainList;
