import React from "react";

import { IProduct, ICartItem } from "../../../models";

type MainListItemCardProps = {
	product: IProduct;
	addToCart: (item: ICartItem) => void;
};

const MainListItemCard = ({ product, addToCart }: MainListItemCardProps) => {
	const { image, category, name, currency, price, bestseller } = product;
	const formattedCurrency = currency.replace("USD", "$");
	return (
		<div className="flex flex-col">
			<div className="h-96 relative">
				{bestseller && (
					<p className="absolute bg-white text-lg py-1 px-4">Best Seller</p>
				)}
				<img
					src={image.src}
					alt={image.alt}
					className="object-cover min-h-full max-h-full w-full"
				/>
			</div>
			<>
				<button
					className="w-full bg-black text-white uppercase text-2xl tracking-widest py-3 font-medium"
					onClick={() => addToCart({ name, currency, price, image })}
				>
					Add to cart
				</button>
				<p className="text-xl text-gray-600 font-bold capitalize mt-2 mb-1">
					{category}
				</p>
				<p className="text-3xl font-bold mb-1">{name}</p>
				<p className="text-gray-600 text-2xl">
					{formattedCurrency}
					{price}
				</p>
			</>
		</div>
	);
};

export default MainListItemCard;
