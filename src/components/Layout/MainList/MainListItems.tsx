import React from "react";
import { v4 as uuidv4 } from "uuid";

import { MainListProps } from "./MainList";
import MainListItemCard from "./MainListItemCard";

const MainListItems = ({ products }: MainListProps) => {
	return (
		<div className="grid grid-cols-3">
			{products?.map((product) => (
				<MainListItemCard key={uuidv4()} product={product} />
			))}
		</div>
	);
};

export default MainListItems;
