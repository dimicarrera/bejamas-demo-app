import React, { useContext } from "react";

import MainListHeader from "./MainListHeader";
import MainListFiltering from "./MainListFiltering";
import MainListItems from "./MainListItems";

import { IProduct } from "../../../models";
import { DataContext } from "../../../context/DataContext";

export type MainListProps = {
	products: IProduct[];
};

const MainList = () => {
	const { items } = useContext(DataContext);

	return (
		<>
			<MainListHeader />
			<div className="flex justify-between">
				<MainListFiltering products={items} />
				<MainListItems products={items} />
			</div>
		</>
	);
};

export default MainList;
