import React from "react";

import { ReactComponent as ArrowUp } from "../../../images/arrowUp.svg";
import { ReactComponent as ArrowDown } from "../../../images/arrowDown.svg";

const MainListHeader = ({
	sortingTypeHandler,
	sortingDirectionHandler,
}: {
	sortingTypeHandler: (value: string) => void;
	sortingDirectionHandler: (value: string) => void;
}) => {
	return (
		<header className="flex justify-between py-8">
			<h3>
				Photography / <span>Premium Photos</span>
			</h3>
			<div className="flex">
				<div className="flex mr-4">
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
				<span className="text-gray-500">Sort By</span>
				<select
					name="photos-sorting"
					id="photos-sorting"
					onChange={(e) => sortingTypeHandler(e.target.value)}
				>
					<option value="price">Price</option>
					<option value="name">Name</option>
				</select>
			</div>
		</header>
	);
};

export default MainListHeader;
