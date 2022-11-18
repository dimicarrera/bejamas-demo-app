import React from "react";

import { ICartItem } from "../../../models";

type FeaturedItemHeaderProps = {
	name: string;
	price: number;
	currency: string;
	image: {
		src: string;
		alt: string;
	};
	addToCart: (item: ICartItem) => void;
};

const FeaturedItemHeader = ({
	name,
	price,
	currency,
	image,
	addToCart,
}: FeaturedItemHeaderProps) => {
	return (
		<header className="flex justify-between mt-16 mb-8">
			<h3 className="text-3xl font-bold">{name}</h3>
			<button className="px-12 uppercase text-white font-medium bg-black tracking-widest" onClick={() => addToCart({name, price, currency, image })}>Add to cart</button>
		</header>
	);
};

export default FeaturedItemHeader;
