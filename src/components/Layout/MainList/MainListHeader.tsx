import React from "react";

import { ReactComponent as ArrowUp } from "../../../images/arrowUp.svg";
import { ReactComponent as ArrowDown } from "../../../images/arrowDown.svg";

const MainListHeader = ({
	sortingTypeHandler,
	sortingDirectionHandler,
}: {
	sortingTypeHandler: (value: string) => void;
	sortingDirectionHandler: (value: "asc" | "desc" | "") => void;
}) => {
	return (
		<header className="flex justify-between mt-16 mb-8">
			<h3 className="text-3xl font-bold">
				Photography / <span className="text-gray-400 font-normal">Premium Photos</span>
			</h3>
			<div className="flex items-center">
				<div className="flex mr-2">
					<ArrowUp
						fill="gray"
						className="cursor-pointer"
						onClick={() => sortingDirectionHandler("asc")}
					/>
					<ArrowDown
						fill="gray"
						className="cursor-pointer"
						onClick={() => sortingDirectionHandler("desc")}
					/>
				</div>
				<p className="text-gray-400 text-xl mr-2">Sort By</p>
				<select
					name="photos-sorting"
					id="photos-sorting"
					onChange={(e) => sortingTypeHandler(e.target.value)}
					className="text-xl"
				>
					<option value="price">Price</option>
					<option value="name">Name</option>
				</select>
			</div>
		</header>
	);
};

export default MainListHeader;
