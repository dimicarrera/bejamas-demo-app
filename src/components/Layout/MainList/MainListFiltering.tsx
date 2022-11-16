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
				<h4>Category</h4>
				{uniqueCategories?.map((cat) => (
					<div key={cat}>
						<input
							type="checkbox"
							name={cat}
							id={cat}
							onChange={() => categoryHandler(cat)}
						/>
						<label htmlFor={cat}>{cat}</label>
					</div>
				))}
			</div>
			<div>
				<h4>Price range</h4>
				{priceRanges.map((range, idx) => (
					<div key={idx}>
						<input
							type="radio"
							name="price-range"
							id={`price-range-${idx}`}
							onChange={() => priceRangeHandler(idx)}
						/>
						<label htmlFor={`price-range-${idx}`}>{range}</label>
						<br />
					</div>
				))}
			</div>
		</div>
	);
};

export default MainListFiltering;
