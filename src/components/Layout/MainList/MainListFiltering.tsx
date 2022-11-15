import React from "react";
import { IProduct } from "../../../models";

type MainListFilteringProps = {
	products: IProduct[];
	categoryHandler: (cat: string) => void;
};

const MainListFiltering = ({
	products,
	categoryHandler,
}: MainListFilteringProps) => {
	const uniqueCategories = Array.from(
		new Set(products?.map((product) => product.category))
	);

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
		</div>
	);
};

export default MainListFiltering;
