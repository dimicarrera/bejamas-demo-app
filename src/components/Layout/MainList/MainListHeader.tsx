import React from "react";

const MainListHeader = () => {
	return (
		<div>
			<h3>
				Photography / <span>Premium Photos</span>
			</h3>
			<span>
				<span>Sort By</span>
				<select
					name="photos-sorting"
					id="photos-sorting"
				>
					<option value="1">Price</option>
					<option value="2">Name</option>
				</select>
			</span>
		</div>
	);
};

export default MainListHeader;
