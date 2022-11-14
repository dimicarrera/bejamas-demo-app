import React from "react";

import { MainListProps } from "./MainList";

const MainListFiltering = ({ products }: MainListProps) => {
	const uniqueCategories = Array.from(
		new Set(products?.map((product) => product.category))
	);
	return (
		<>
			<div>
				<h4>Category</h4>
				{uniqueCategories?.map((cat) => (
					<div key={cat}>
						<input
							type="checkbox"
							name={cat}
							id={cat}
						/>
						<label htmlFor={cat}>{cat}</label>
					</div>
				))}
			</div>
			<div>
				<h4>Price range</h4>
				<input
					type="radio"
					name="price-range"
					id="price-range-1"
				/>
				<label htmlFor="price-range-1">Lower than $20</label>
				<br />
				<input
					type="radio"
					name="price-range"
					id="price-range-2"
				/>
				<label htmlFor="price-range-2">$20 - $100</label>
				<br />
				<input
					type="radio"
					name="price-range"
					id="price-range-3"
				/>
				<label htmlFor="price-range-3">$100 - $200</label>
				<br />
				<input
					type="radio"
					name="price-range"
					id="price-range-4"
				/>
				<label htmlFor="price-range-4">More than $200</label>
			</div>
		</>
	);
};

export default MainListFiltering;
