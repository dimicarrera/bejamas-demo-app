import React from "react";

import { IProduct } from "../../../models";

const MainListItemCard = ({ product }: { product: IProduct }) => {
	return (
		<div className="flex flex-col justify-between">
			<div className="max-h-96 h-full">
				<img
					src={product.image.src}
					alt={product.image.alt}
					className="object-cover min-h-full max-h-full w-full"
				/>
			</div>
			<>
				<button className="w-full bg-black text-white uppercase py-3">
					Add to cart
				</button>
				<p>{product.category}</p>
				<p>{product.name}</p>
				<p>
					{product.currency}
					{product.price}
				</p>
			</>
		</div>
	);
};

export default MainListItemCard;
