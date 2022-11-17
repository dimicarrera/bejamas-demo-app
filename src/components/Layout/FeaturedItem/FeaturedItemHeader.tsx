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
		<header className="flex justify-between">
			<h3>{name}</h3>
			<button onClick={() => addToCart({name, price, currency, image })}>Add to cart</button>
		</header>
	);
};

export default FeaturedItemHeader;
