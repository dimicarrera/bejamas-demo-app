import React from "react";
import { v4 as uuidv4 } from "uuid";

import { MainListProps } from "./MainList";
import MainListItemCard from "./MainListItemCard";
import MainListPagination from "./MainListPagination";

const MainListItems = ({ products }: MainListProps) => {
	return (
		<div className="flex basis-8/12 flex-col">
			<div className="grid grid-cols-3 gap-8">
				{products?.map((product) => (
					<MainListItemCard
						key={uuidv4()}
						product={product}
					/>
				))}
				{products.length === 0 && (
					<p>No items available with your search criteria</p>
				)}
			</div>
			<MainListPagination />
		</div>
	);
};

export default MainListItems;
