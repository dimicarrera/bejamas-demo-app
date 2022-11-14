import React from "react";

import { IProduct } from "../../../models";

const MainListItemCard = ({ product }: { product: IProduct }) => {
	return (
		<div className="border-gray-900 border-2">
			<div>
				<img
					src={product.image.src}
					alt={product.image.alt}
				/>
				<button>Add to cart</button>
			</div>
			<p>{product.category}</p>
			<p>{product.name}</p>
			<p>
				{product.currency}
				{product.price}
			</p>
		</div>
	);
};

export default MainListItemCard;
