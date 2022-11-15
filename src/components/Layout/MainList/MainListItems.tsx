import React from "react";
import { v4 as uuidv4 } from "uuid";

import { MainListProps } from "./MainList";
import MainListItemCard from "./MainListItemCard";

const MainListItems = ({ products }: MainListProps) => {
	return (
		<div className="flex basis-8/12">
			<div className="grid grid-cols-3 gap-8">
				{/* todo: implement products array coming from filtering/sorting/pagination state, 
			not original data */}
				{products?.map((product) => (
					<MainListItemCard
						key={uuidv4()}
						product={product}
					/>
				))}
			</div>
		</div>
	);
};

export default MainListItems;
