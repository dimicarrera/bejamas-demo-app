import React from "react";
import { IProduct } from "../../../models";

type MainListFilteringProps = {
	products: IProduct[];
	categoryHandler: (cat: string) => void;
	priceRangeHandler: (idx: number) => void;
};

const MainListFiltering = ({
	products,
	categoryHandler,
	priceRangeHandler,
}: MainListFilteringProps) => {
	const uniqueCategories = Array.from(
		new Set(products?.map((product) => product.category))
	);

	const priceRanges = [
		"Lower than $20",
		"$20 - $100",
		"$100 - $200",
		"More than $200",
	];

	return (
		<div className="flex flex-col">
			<div>
				<h6 className="font-bold text-xl mb-6">Category</h6>
				{uniqueCategories?.sort().map((cat) => (
					<div
						key={cat}
						className="flex items-center"
					>
						<input
							type="checkbox"
							name={cat}
							id={cat}
							onChange={() => categoryHandler(cat)}
							className="mr-4 h-5 w-5 text-gray-900 accent-white cursor-pointer"
						/>
						<label
							htmlFor={cat}
							className="capitalize text-lg text-gray-900 cursor-pointer"
						>
							{cat}
						</label>
					</div>
				))}
			</div>
			<hr className="border-gray-500 my-6" />
			<div>
				<h6 className="font-bold text-xl mb-6">Price range</h6>
				{priceRanges.map((range, idx) => (
					<div key={idx}>
						<input
							type="radio"
							name="price-range"
							id={`price-range-${idx}`}
							onChange={() => priceRangeHandler(idx)}
							className="mr-4 h-5 w-5 text-gray-900 accent-black cursor-pointer"
						/>
						<label
							htmlFor={`price-range-${idx}`}
							className="capitalize text-lg text-gray-900 cursor-pointer"
						>
							{range}
						</label>
						<br />
					</div>
				))}
			</div>
		</div>
	);
};

export default MainListFiltering;
