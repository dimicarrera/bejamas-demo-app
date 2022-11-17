import React from "react";

import { IProduct, ICartItem } from "../../../models";

type MainListItemCardProps = {
	product: IProduct;
	addToCart: (item: ICartItem) => void;
};

const MainListItemCard = ({ product, addToCart }: MainListItemCardProps) => {
	const { image, category, name, currency, price } = product;
	return (
		<div className="flex flex-col">
			<div className="h-96">
				<img
					src={image.src}
					alt={image.alt}
					className="object-cover min-h-full max-h-full w-full"
				/>
			</div>
			<>
				<button
					className="w-full bg-black text-white uppercase py-3"
					onClick={() => addToCart({ name, currency, price, image })}
				>
					Add to cart
				</button>
				<p>{category}</p>
				<p>{name}</p>
				<p>
					{currency}
					{price}
				</p>
			</>
		</div>
	);
};

export default MainListItemCard;
